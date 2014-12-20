import Ember from 'ember';

var links = [{
  title: 'GitHub',
  url: 'https://github.com/bobisjan'
}, {
  title: 'Twitter',
  url: 'https://twitter.com/bobisjan'
}, {
  title: 'LinkedIn',
  url: 'https://www.linkedin.com/pub/jan-bobisud/76/802/273'
}];

export default Ember.Route.extend({

  model: function() {
    return links;
  }

});
