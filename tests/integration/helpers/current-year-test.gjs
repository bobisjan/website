import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import currentYear from 'website/helpers/current-year';

module('Integration | Helper | current-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>{{(currentYear)}}</template>);

    assert.dom().hasText(`${new Date().getFullYear()}`);
  });
});
