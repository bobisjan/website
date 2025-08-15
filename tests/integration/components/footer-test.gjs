import { module, test } from 'qunit';
import { setupRenderingTest } from '#tests/helpers.js';
import { render } from '@ember/test-helpers';
import Footer from '#src/components/footer.gjs';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Footer @city="Prague" /></template>);

    assert.dom().hasText(`${new Date().getFullYear()}, Prague`);
  });
});
