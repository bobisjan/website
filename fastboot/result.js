import SimpleDOM from 'simple-dom/dist/commonjs/es5/index.js';

const HTMLSerializer = new SimpleDOM.HTMLSerializer(SimpleDOM.voidMap);

const SHOEBOX_TAG_PATTERN = '<script type="fastboot/shoebox"';
const HTML_HEAD_REGEX = /^([\s\S]*<\/head>)([\s\S]*)/;

export default class Result {
  constructor(doc, html, fastboot) {
    this._doc = doc;
    this._html = html;
    this.fastboot = fastboot;
  }

  send(res) {
    res.statusCode = this.fastboot.response.status;
    for (let [key, value] of this.fastboot.response.headers.entries()) {
      res.setHeader(key, value);
    }
    res.end(this.html());
  }

  html() {
    this._finalizeHTML();

    let { status, headers } = this.fastboot.response;

    if (status === 204) {
      this._html = '';
      this._head = '';
      this._body = '';
    } else if (status >= 300 && status <= 399) {
      let location = headers.get('location');

      this._html = '<body><!-- EMBER_CLI_FASTBOOT_BODY --></body>';
      this._head = '';
      this._body = '';

      if (location) {
        this._body = `<h1>Redirecting to <a href="${location}">${location}</a></h1>`;
      }
    }

    return insertIntoIndexHTML(
      this._html,
      this._htmlAttributes,
      this._htmlClass,
      this._head,
      this._body,
      this._bodyAttributes,
      this._bodyClass,
    );
  }

  _finalizeHTML() {
    let htmlElement = this._doc.documentElement;
    let head = this._doc.head;
    let body = this._doc.body;

    let { klass: htmlClass, attributes: htmlAttributes } =
      extractExtraAttributes(htmlElement);
    this._htmlClass = htmlClass;
    this._htmlAttributes = htmlAttributes;

    let { klass: bodyClass, attributes: bodyAttributes } =
      extractExtraAttributes(body);
    this._bodyClass = bodyClass;
    this._bodyAttributes = bodyAttributes;

    if (head) {
      head = HTMLSerializer.serializeChildren(head);
    }

    createShoebox(this._doc, this.fastboot);

    body = HTMLSerializer.serializeChildren(body);

    this._head = head;

    // Adding script boundary around the body
    this._body = `<script type="x/boundary" id="fastboot-body-start"></script>${body}<script type="x/boundary" id="fastboot-body-end"></script>`;
  }
}

function createShoebox(doc, fastboot) {
  let shoebox = fastboot.shoebox;
  if (!shoebox) {
    return;
  }

  for (let key in shoebox.data) {
    let value = shoebox.data[key];
    let textValue = JSON.stringify(value);
    textValue = escapeJSONString(textValue);

    let scriptText = doc.createRawHTMLSection(textValue);
    let scriptEl = doc.createElement('script');

    scriptEl.setAttribute('type', 'fastboot/shoebox');
    scriptEl.setAttribute('id', `shoebox-${key}`);
    scriptEl.appendChild(scriptText);
    doc.body.appendChild(scriptEl);
  }
}

function extractExtraAttributes(element) {
  let klass;
  let attributes;
  if (element.attributes.length > 0) {
    let elementClass = element.attributes.find((attr) => attr.name === 'class');
    if (elementClass) {
      klass = elementClass;
      let otherAttrs = element.attributes.filter(
        (attr) => attr.name !== 'class',
      );
      if (otherAttrs.length > 0) {
        attributes = HTMLSerializer.attributes(otherAttrs);
      } else {
        attributes = null;
      }
    } else {
      attributes = HTMLSerializer.attributes(element.attributes);
      klass = null;
    }
  } else {
    klass = attributes = null;
  }
  return { klass, attributes };
}

function missingTag(tag) {
  throw new Error(
    `Fastboot was not able to find ${tag} in base HTML. It could not replace the contents.`,
  );
}

function addClass(html, regex, newClass) {
  return html.replace(regex, function (_, tag, attributes) {
    if (/class="([^"]*)"/i.test(attributes)) {
      attributes = attributes.replace(/class="([^"]*)"/i, function (_, klass) {
        return `class="${klass} ${newClass}"`;
      });
    } else {
      attributes += ' class="' + newClass + '"';
    }
    return `<${tag}${attributes}>`;
  });
}

function insertIntoIndexHTML(
  html,
  htmlAttributes,
  htmlClass,
  head,
  body,
  bodyAttributes,
  bodyClass,
) {
  if (!html) {
    return html;
  }
  let isBodyReplaced = false;
  let isHeadReplaced = false;

  html = html.replace(
    /<!-- EMBER_CLI_FASTBOOT_(HEAD|BODY) -->/g,
    function (match, tag) {
      if (tag === 'HEAD' && head && !isHeadReplaced) {
        isHeadReplaced = true;
        return head;
      } else if (tag === 'BODY' && body && !isBodyReplaced) {
        isBodyReplaced = true;
        return body;
      }
      return '';
    },
  );

  if (htmlClass) {
    html = addClass(html, /<(html)(.*)>/i, htmlClass.value);
  }
  if (htmlAttributes) {
    html = html.replace(/<html[^>]*/i, function (match) {
      return match + ' ' + htmlAttributes;
    });
  }

  if (bodyClass) {
    html = addClass(html, /<(body)(.*)>/i, bodyClass.value);
  }
  if (bodyAttributes) {
    html = html.replace(/<body[^>]*/i, function (match) {
      return match + ' ' + bodyAttributes;
    });
  }

  if (head && !isHeadReplaced) {
    missingTag('<!-- EMBER_CLI_FASTBOOT_HEAD -->');
  }
  if (body && !isBodyReplaced) {
    missingTag('<!-- EMBER_CLI_FASTBOOT_BODY -->');
  }

  return html;
}

const JSON_ESCAPE = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

const JSON_ESCAPE_REGEXP = /[\u2028\u2029&><]/g;

function escapeJSONString(string) {
  return string.replace(JSON_ESCAPE_REGEXP, function (match) {
    return JSON_ESCAPE[match];
  });
}
