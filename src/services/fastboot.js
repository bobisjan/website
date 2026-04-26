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
