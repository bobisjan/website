import { module, test } from 'qunit';
import { visit } from '#tests/helpers/fasboot.js';

module('FastBoot | index', function () {
  test('it renders', async function (assert) {
    const response = await visit('/');

    assert.strictEqual(response.status, 200);

    assert.dom('h1').hasText('Jan Bobisud');
    assert.dom('p').hasText('Development on Zonky at Air Bank');
  });
});
