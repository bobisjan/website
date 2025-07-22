export async function visit(path) {
  const response = await fetch(path, {
    headers: new Headers({ Accept: 'text/html' }),
  });
  const text = await response.text();
  const body = extractBody(text);

  document.querySelector('#ember-testing').innerHTML = body;

  return response;
}

function extractBody(html) {
  const start = '<script type="x/boundary" id="fastboot-body-start"></script>';
  const end = '<script type="x/boundary" id="fastboot-body-end"></script>';

  const startPosition = html.indexOf(start);
  const endPosition = html.indexOf(end);

  if (!startPosition || !endPosition) {
    throw new Error('Could not find fastboot boundary');
  }

  const startAt = startPosition + start.length;
  const endAt = endPosition - end.length;

  return html.substring(startAt, endAt);
}
