import SimpleDOM from 'simple-dom/dist/commonjs/es5/index.js';
import Result from './result.js';

export default class FastBoot {
  constructor(App, template) {
    this.App = App;
    this.template = template;
  }

  async visit(req, res) {
    let fastboot = {
      request: new FastBootRequest(req),
      response: new FastBootResponse(),
      shoebox: null,
    };

    let instance = this.App.create({
      autoboot: false,
      fastboot,
    });

    try {
      let document = new SimpleDOM.Document();
      let options = {
        isBrowser: false,
        document,
        rootElement: document.body,
        shouldRender: true,
      };

      await instance.visit(fastboot.request.url, options);

      let result = new Result(document, this.template, fastboot);
      result.send(res);
    } finally {
      instance.destroy();
    }
  }
}

class FastBootRequest {
  constructor(request) {
    this.url = request.url;
    this.headers = new Headers(request.headers);
  }
}

class FastBootResponse {
  status = 200;

  headers = new Headers({
    'Content-Type': 'text/html',
  });
}
