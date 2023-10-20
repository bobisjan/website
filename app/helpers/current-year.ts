import { helper } from '@ember/component/helper';

let year: number;

export function currentYear() {
  year = year || new Date().getFullYear();
  return year;
}

export default helper(currentYear);
