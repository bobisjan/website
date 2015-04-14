import {
  currentYear
} from 'bobisjan/helpers/current-year';
import { module, test } from 'qunit';

module('CurrentYearHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = currentYear(42);
  assert.ok(result);
});
