import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import FastBoot from './render.js';

class Request {
  constructor(url) {
    this.method = 'GET';
    this.url = url;
    this.headers = { Accept: 'text/html' };
  }
}

class Response {
  html = '';

  setHeader() {}

  end(html) {
    this.html = html;
  }
}

async function prerender(fastboot, path, outDir) {
  let request = new Request(path);
  let response = new Response();

  await fastboot.visit(request, response);

  await mkdir(join(process.cwd(), outDir, path), { recursive: true });
  await writeFile(
    join(process.cwd(), outDir, path, 'index.html'),
    response.html,
  );
}

let [_, file, ...paths] = process.argv;

if (import.meta.url === `file://${file}`) {
  const outDir = 'dist';

  const { default: App } = await import(
    join(process.cwd(), outDir, '.ssr', 'app.js')
  );

  const template = await readFile(
    join(process.cwd(), outDir, 'index.html'),
    'utf8',
  );

  let fastboot = new FastBoot(App, template);

  for (let path of paths) {
    await prerender(fastboot, path, outDir);
  }
}
