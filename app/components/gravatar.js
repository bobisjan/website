import Component from '@ember/component';
import { computed } from '@ember/object';

export default class Gravatar extends Component {
  tagName = '';

  size = 250;

  secure = true;

  retina = false;

  hash = null;

  @computed('s', 'default', 'hash')
  get src() {
    let { s, secure, hash } = this;
    let protocol = secure ? 'https' : 'http';

    return `${protocol}://www.gravatar.com/avatar/${hash}?s=${s}`;
  }

  @computed('size', 'retina')
  get s() {
    let { size, retina } = this;

    return retina ? size * 2 : size;
  }
}
