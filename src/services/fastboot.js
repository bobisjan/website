import Service from '@ember/service';
import { getOwner } from '@ember/owner';

class Shoebox {
  data = Object.create(null);

  constructor(fastboot) {
    if (fastboot) {
      fastboot.shoebox = this;
    }
  }

  put(key, value) {
    this.data[key] = value;
  }

  retrieve(key) {
    if (import.meta.env.SSR) {
      return this.data[key];
    }

    if (key in this.data) {
      return this.data[key];
    }

    let value = JSON.parse(
      document.querySelector(`#shoebox-${key}`).textContent,
    );
    this.data[key] = value;
    return value;
  }
}

export default class FastBootService extends Service {
  fastboot = getOwner(this).lookup('application:main').fastboot;

  shoebox = new Shoebox(this.fastboot);

  get request() {
    return this.fastboot.request;
  }

  get response() {
    return this.fastboot.response;
  }

  redirect(url, status = 302) {
    this.response.status = status;
    this.response.headers.set('Location', url);
  }
}

export const clear = {
  name: 'clear-double-boot',

  initialize(instance) {
    let originalDidCreateRootView = instance.didCreateRootView;

    instance.didCreateRootView = function () {
      if (!import.meta.env.SSR) {
        let current = document.getElementById('fastboot-body-start');
        let endMarker = document.getElementById('fastboot-body-end');

        if (current && endMarker) {
          let shoeboxNodes = document.querySelectorAll(
            '[type="fastboot/shoebox"]',
          );
          let shoeboxNodesArray = []; // Note that IE11 doesn't support more concise options like Array.from, so we have to do something like this
          for (let i = 0; i < shoeboxNodes.length; i++) {
            shoeboxNodesArray.push(shoeboxNodes[i]);
          }
          let parent = current.parentElement;
          let nextNode;
          do {
            nextNode = current.nextSibling;
            parent.removeChild(current);
            current = nextNode;
          } while (
            nextNode &&
            nextNode !== endMarker &&
            shoeboxNodesArray.indexOf(nextNode) < 0
          );
          endMarker.parentElement.removeChild(endMarker);
        }
      }
      originalDidCreateRootView.apply(instance, arguments);
    };
  },
};
