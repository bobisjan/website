import { module, test } from 'qunit';
import { setupRenderingTest } from '#tests/helpers.js';
import { render } from '@ember/test-helpers';
import Gravatar from '#src/components/gravatar.gjs';

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
