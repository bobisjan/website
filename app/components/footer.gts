import currentYear from '../helpers/current-year';
import type { TOC } from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

export interface FooterSignature {
  Element: HTMLElement;
  Args: { city: ApplicationRouteModel['city'] };
}

const Footer: TOC<FooterSignature> = <template>
  <footer class="mastfoot">
    <p>{{(currentYear)}}, {{@city}}</p>
  </footer>
</template>;

export default Footer;
