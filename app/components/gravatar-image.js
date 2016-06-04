import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title', 'size:height', 'size:width'],
  classNames: ['gravatar-image'],
  size: 250,
  title: '',
  defaultImage: '',
  secure: true,
  retina: false,
  hash: null,

  src: Ember.computed('email', 'imageSize', 'default', 'hash', function() {
    var imageSize = this.get('imageSize');
    var def = this.get('defaultImage');
    var secure = this.get('secure');
    var protocol = secure ? 'https' : 'http';

    var hashToUse = this.get('hash');
    return protocol + '://www.gravatar.com/avatar/' + hashToUse + '?s=' + imageSize + '&d=' + def;
  }),

  imageSize: Ember.computed('size', 'retina', function() {
    var size = this.get('size');
    return this.get('retina') ? (size * 2) : size;
  })
});
