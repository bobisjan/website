import Gravatar from './gravatar';

<template>
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
</template>
