import ajax from 'ic-ajax';
import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
  sessionToken: null,
  
  restore: function(data) {
    this.set('sessionToken', data.sessionToken);
    return ajax('https://api.parse.com/1/users/me');  
  },

  authenticate: function(cred) {
    var token = cred.sessionToken;
    if (token) { this.set('sessionToken', token); }
    var endpoint = token ? 'users/me' : 'login';
    var options = token ? {} : {
      data: {
        username: cred.identification,
        password: cred.password
      }
    };

    return ajax('https://api.parse.com/1/' + endpoint, options)
    .then( function(res) {
      this.set('sessionToken', res.sessionToken);
      return res;
    }.bind(this));
  },
   
  invalidate: function() {
    this.set('sessionToken', null);
    return Ember.RSVP.resolve();
  },
  
  __setupHeaders: Ember.immediateObserver('sessionToken', function() {
    Ember.$.ajaxSetup({
      headers: {
        'X-Parse-Session-Token': this.get('sessionToken')
      }
    });  
  
  })  


});
