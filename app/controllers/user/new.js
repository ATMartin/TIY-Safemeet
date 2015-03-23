import Ember from 'ember';

export default Ember.Controller.extend({
  user: {},
  actions: {
    createUser: function() {
      var newUser = this.get('user');
      newUser.username = newUser.email;
      var self = this;
      this.parse.push('user', newUser)
      .then(function(data) {
        self.get('session').authenticate('authenticator:parse-email', {identification: newUser.email, password: newUser.password});
      });
    },

    getLoc: function() {
      this.set('user.homezip', "Loading...");
      this.geolocator.getCurrentZip(this, 'user.homezip');
    }

  }
});
