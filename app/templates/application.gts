import type { TOC } from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';
import Header from '../components/header';
import Footer from '../components/footer';

interface ApplicationRouteSignature {
  Args: {
    model: ApplicationRouteModel;
  };
}

const Template: TOC<ApplicationRouteSignature> = <template>
  <div class="cover-container">
    <Header @gravatar={{@model.gravatar}} @links={{@model.links}} />
    {{outlet}}
    <Footer @city={{@model.city}} />
  </div>
</template>;

export default Template;
