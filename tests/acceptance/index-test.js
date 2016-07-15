import { test } from 'qunit';
import moduleForAcceptance from 'bobisjan/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    percySnapshot('index');
  });
});
