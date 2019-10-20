import Component from '@glimmer/component';

export default class Gravatar extends Component {
  get src() {
    let { s } = this;
    let { hash } = this.args;

    return `https://www.gravatar.com/avatar/${hash}?s=${s}`;
  }

  get s() {
    let { retina, size = 250 } = this.args;

    return retina ? size * 2 : size;
  }
}
