import Ember from 'ember';

var year;

export function currentYear() {
  year = year || (new Date()).getFullYear();
  return year;
}

// https://github.com/ember-cli/ember-cli/issues/4364
// export default Ember.Helper.helper(currentYear);
export default Ember.Handlebars.makeBoundHelper(currentYear);
