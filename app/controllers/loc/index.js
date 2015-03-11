import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logAll: function() {
      console.log(this.get('model'));
    }
  }
});
