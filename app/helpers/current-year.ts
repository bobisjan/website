import { helper } from '@ember/component/helper';

let year: number;

export function currentYear() {
  year = year || new Date().getFullYear();
  return year;
}

export default helper(currentYear);

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'current-year': typeof currentYear;
  }
}
