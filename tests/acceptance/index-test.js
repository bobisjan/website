import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { percySnapshot } from 'ember-percy';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Jan Bobisud');
    assert.dom('p').hasText('Development at Zonky.');

    await percySnapshot('index');
  });
});
