import RouteTemplate from 'ember-route-template';
import type { TOC } from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

interface IndexRouteSignature {
  Args: {
    model: ApplicationRouteModel;
  };
}

const template: TOC<IndexRouteSignature> = <template>
  <main class="cover">
    <h1>{{@model.name}}</h1>
    <p>Development on&nbsp;<a
        href={{@model.project.url}}
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >{{@model.project.title}}</a>
      at&nbsp;<a
        href={{@model.company.url}}
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >{{@model.company.title}}</a></p>
  </main>
</template>;

export default RouteTemplate(template);
