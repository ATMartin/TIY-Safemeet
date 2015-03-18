import Ember from 'ember';

export default Ember.Controller.extend({
  isCurrentUser: function() {
    return (this.session.isAuthenticated && this.session.get('currentUser').email === this.get('model').email);
  }.property('model'),
  actions: {
    editUser: function() {
      alert('Edited!');
    }
  }
});
