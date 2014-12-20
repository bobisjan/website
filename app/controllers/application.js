import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  gravatar: config.about.email,
  city: config.about.city
});
