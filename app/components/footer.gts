import currentYear from '../helpers/current-year';
import type { TOC } from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

export interface FooterSignature {
  Element: HTMLElement;
  Args: { city: ApplicationRouteModel['city'] };
}

export default <template>
  <footer class="mastfoot">
    <p>{{(currentYear)}}, {{@city}}</p>
  </footer>
</template> satisfies TOC<FooterSignature>;
