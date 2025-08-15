import Component from '@glimmer/component';

export default class Gravatar extends Component {
  get src() {
    const { s } = this;
    const { hash } = this.args;

    return `https://www.gravatar.com/avatar/${hash}?s=${s}`;
  }

  get s() {
    const { retina, size = 250 } = this.args;

    return retina ? size * 2 : size;
  }

  <template>
    <img
      src={{this.src}}
      class="gravatar"
      width={{@size}}
      height={{@size}}
      alt="avatar"
      ...attributes
    />
  </template>
}
