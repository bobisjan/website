import { helper } from '@ember/component/helper';

let year;

export function currentYear() {
  year = year || new Date().getFullYear();
  return year;
}

export default helper(currentYear);
