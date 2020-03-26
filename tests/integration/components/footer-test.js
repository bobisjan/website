import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Footer @city={{"Prague"}} />
    `);

    let year = new Date().getFullYear();

    assert.equal(this.element.textContent.trim(), `${year}, Prague`);
  });
});
