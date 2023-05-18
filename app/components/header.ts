import templateOnlyComponent from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

export interface HeaderSignature {
  Element: HTMLElement;
  Args: {
    gravatar: ApplicationRouteModel['gravatar'];
    links: ApplicationRouteModel['links'];
  };
}

const Header = templateOnlyComponent<HeaderSignature>();

export default Header;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Header: typeof Header;
  }
}
