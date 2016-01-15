import Ember from 'ember';

var year;

export function currentYear() {
  year = year || (new Date()).getFullYear();
  return year;
}

export default Ember.Helper.helper(currentYear);
