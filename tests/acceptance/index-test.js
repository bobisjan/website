import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { percySnapshot } from 'ember-percy';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    await percySnapshot('index');
  });
});
