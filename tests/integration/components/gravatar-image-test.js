import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gravatar-image', 'Integration | Component | gravatar image', {
  integration: true
});

test('it renders', function(assert) {
  this.set('hash', '7a468faec3b45150e655fb60acd359d8');

  this.render(hbs`{{gravatar-image hash=hash}}`);

  assert.equal(this.$().children().prop('nodeName'), 'IMG');
  assert.equal(this.$().text().trim(), '');
});
