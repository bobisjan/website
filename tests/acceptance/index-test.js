import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
import percySnapshot from '../helpers/percy.js';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting index', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h1').hasText('Jan Bobisud');
    assert.dom('p').hasText('Development on Zonky at Air Bank');

    await percySnapshot('index');
  });
});
