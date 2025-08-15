import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import FastBoot from './render.js';
import { passthrough, fixError } from './utils.js';

export function fastboot({ outDir = 'dist' } = {}) {
  return function middleware(app) {
    app.use(async function (request, response, next) {
      try {
        if (passthrough(request)) {
          return next();
        }

        let { default: App } = await import(
          join(process.cwd(), outDir, '.ssr', 'app.js')
        );

        let template = await readFile(
          join(process.cwd(), outDir, 'index.html'),
          'utf8',
        );

        let fastboot = new FastBoot(App, template);
        await fastboot.visit(request, response);
      } catch (error) {
        console.error(error);
        fixError(error);
        next(error);
      }
    });
  };
}
