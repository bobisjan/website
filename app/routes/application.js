import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      name: 'Jan Bobisud',
      city: 'Prague',
      company: 'Zonky',
      gravatar: '7a468faec3b45150e655fb60acd359d8',
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
