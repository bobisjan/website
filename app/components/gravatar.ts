import Component from '@glimmer/component';

export interface GravatarSignature {
  Element: HTMLImageElement;
  Args: {
    hash: string;
    retina: boolean;
    size: number;
  };
}

export default class Gravatar extends Component<GravatarSignature> {
  get src() {
    const { s } = this;
    const { hash } = this.args;

    return `https://www.gravatar.com/avatar/${hash}?s=${s}`;
  }

  get s() {
    const { retina, size = 250 } = this.args;

    return retina ? size * 2 : size;
  }
}
