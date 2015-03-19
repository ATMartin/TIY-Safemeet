import Ember from 'ember';
import Session from 'simple-auth/session';

export function initialize(container) {
  // application.inject('route', 'foo', 'service:foo');
  Session.reopen({
    setCurrentUser: function() {
      var userid = this.get('objectId');
      var self = this;

      if (!Ember.isEmpty(userid)) {
        return container.lookup("service:parse").find("user", userid)
          .then(function(user) {
            self.set('currentUser', user);  
          });
      }
    }.observes('objectId'),
    currentUser: function() {
      return this.get('currentUser');
    }
  });
}

export default {
  name: 'session-user',
  initialize: initialize
};
