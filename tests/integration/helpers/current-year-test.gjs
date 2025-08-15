import { module, test } from 'qunit';
import { setupRenderingTest } from '#tests/helpers.js';
import { render } from '@ember/test-helpers';
import currentYear from '#src/helpers/current-year.js';

module('Integration | Helper | current-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>{{(currentYear)}}</template>);

    assert.dom().hasText(`${new Date().getFullYear()}`);
  });
});
