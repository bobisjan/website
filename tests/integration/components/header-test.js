import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('gravatar', 'my-gravatar');
    this.set('links', [
      { url: 'https://example.com/my-link', title: 'my-link' },
    ]);

    await render(hbs`
      <Header @gravatar={{this.gravatar}} @links={{this.links}} />
    `);

    assert.equal(
      this.element.querySelector('img').src,
      'https://www.gravatar.com/avatar/my-gravatar?s=100'
    );

    let link = this.element.querySelector('a');

    assert.equal(link.href, 'https://example.com/my-link');
    assert.equal(link.textContent.trim(), 'my-link');
  });
});
