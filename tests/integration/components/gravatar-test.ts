import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gravatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('hash', '7a468faec3b45150e655fb60acd359d8');

    await render(hbs`<Gravatar @hash={{this.hash}} />`);

    assert.dom('img').exists();
    assert.dom().hasText('');
  });
});
