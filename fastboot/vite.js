import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import FastBoot from './render.js';
import { passthrough, fixError } from './utils.js';

export function fastboot({ ssr = 'src/app.js' } = {}) {
  return {
    name: 'fastboot',
    config({ build }) {
      let config = {
        ssr: {
          noExternal: true,
        },
      };

      if (build?.ssr) {
        if (typeof build.ssr === 'string') {
          throw new Error(
            'The `ssr` option in Vite config should be a boolean, not a string.',
          );
        }

        let outDir = join(build.outDir || 'dist', '.ssr');
        config.build = { ssr, outDir };
      }

      return config;
    },
    configureServer(server) {
      server.middlewares.use('/', async (request, response, next) => {
        try {
          if (passthrough(request)) {
            return next();
          }

          let { default: App } = await server.ssrLoadModule(`/${ssr}`);

          let template = await readFile(resolve('index.html'), 'utf8');
          template = await server.transformIndexHtml(
            '/index.html',
            template,
            request.url,
          );

          let fastboot = new FastBoot(App, template);
          await fastboot.visit(request, response);
        } catch (error) {
          server.ssrFixStacktrace(error);
          fixError(error);
          next(error);
        }
      });
    },
  };
}
