import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:parse-email',
  actions: {
    gotoNewUser: function() {
      this.transitionToRoute('user.new');
    }
  }
});
