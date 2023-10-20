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
    <p>Development at {{@model.company}}.</p>
  </main>
</template>;

export default RouteTemplate(template);
