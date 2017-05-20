import { currentYear } from 'bobisjan/helpers/current-year';
import { module, test } from 'qunit';

module('CurrentYearHelper');

test('it works', function(assert) {
  var result = currentYear(42);
  assert.ok(result);
});
