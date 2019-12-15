import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | index', function(hooks) {
  setup(hooks);

  test('it renders', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Jan Bobisud');
    assert.dom('p').hasText('Development at Zonky.');
  });
});
