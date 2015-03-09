import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return {
      city: 'Prague',
      company: 'Usertech',
      gravatar: 'me@bobisjan.com',
      links: [{
        title: 'GitHub',
        url: 'https://github.com/bobisjan'
      }, {
        title: 'Twitter',
        url: 'https://twitter.com/bobisjan'
      }, {
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/bobisjan'
      }]
    };
  }

});
