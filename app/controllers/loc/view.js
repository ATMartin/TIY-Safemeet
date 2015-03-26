import Ember from 'ember';

export default Ember.Controller.extend({
  sharePhone: '',
  hasPhone: function() {
    return (this.get('sharePhone').length !== 12);
  }.property('sharePhone'),
  actions: {
    gotoEdit: function() {
      this.transitionToRoute('loc.edit', this.get('model'));
    },
    shareViaSMS: function() {
      console.log(this.get('sharePhone'));
      alert("TODO: Send Text Messages!");
    }
  }
});
