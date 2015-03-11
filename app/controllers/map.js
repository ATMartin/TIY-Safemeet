import Ember from 'ember';

export default Ember.Controller.extend({
  lat: "25.2884",
  long: "-3.339844",
  actions: {
    logData: function() {
      console.log(this.get('model').lat);
    }
  }
});
