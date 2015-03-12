import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoEdit: function() {
      this.transitionToRoute('loc.edit', this.get('model'));
    }
  }
});
