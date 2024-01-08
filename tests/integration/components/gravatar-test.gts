import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import Gravatar from 'website/components/gravatar';

module('Integration | Component | gravatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <Gravatar
          @hash="7a468faec3b45150e655fb60acd359d8"
          @size={{50}}
          @retina={{true}}
        />
      </template>,
    );

    assert.dom('img').exists();
    assert.dom().hasText('');
  });
});
