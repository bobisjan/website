import templateOnlyComponent from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

export interface FooterSignature {
  Element: HTMLElement;
  Args: { city: ApplicationRouteModel['city'] };
}

const Footer = templateOnlyComponent<FooterSignature>();

export default Footer;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Footer: typeof Footer;
  }
}
