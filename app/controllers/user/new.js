import Ember from 'ember';

export default Ember.Controller.extend({
  user: {},
  actions: {
    createUser: function() {
      var newUser = this.get('user');
      newUser.username = newUser.email;
      console.log(newUser.username);
      var self = this;
      this.parse.push('user', newUser)
      .then(function(data) {
        //console.log(data);
        self.get('session').authenticate('authenticator:parse-email', {identification: newUser.email, password: newUser.password});
      });
    }

  }
});
