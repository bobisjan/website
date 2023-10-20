import Gravatar from './gravatar';
import type { TOC } from '@ember/component/template-only';
import type { ApplicationRouteModel } from '../routes/application';

export interface HeaderSignature {
  Element: HTMLElement;
  Args: {
    gravatar: ApplicationRouteModel['gravatar'];
    links: ApplicationRouteModel['links'];
  };
}

const Header: TOC<HeaderSignature> = <template>
  <header class="masthead">
    <h3 class="masthead-brand">
      <Gravatar @hash={{@gravatar}} @size={{50}} @retina={{true}} />
    </h3>

    <nav class="masthead-nav">
      {{#each @links as |link|}}
        <a
          href={{link.url}}
          class="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{link.title}}
        </a>
      {{/each}}
    </nav>
  </header>
</template>;

export default Header;
