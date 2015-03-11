import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('map', { path: '/map/:lat/:long' });
  this.resource('loc', { path: '/loc' });

});

export default Router;
