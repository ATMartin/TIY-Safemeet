import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('map', { path: '/map/:lat/:long/:range' });
  this.resource('loc', { path: '/loc' }, function() {
    this.route('new');
    this.route('edit', { path: '/edit/:loc_id' });
    this.route('view', { path: '/:loc_id' });
  });

  this.resource('user',{ path: '/user'}, function() {
    this.route('new');
    this.route('edit', { path: '/edit/:user_id' });
    this.route('profile', { path: '/:user_id' });
    this.route('login');
  });
});

export default Router;
