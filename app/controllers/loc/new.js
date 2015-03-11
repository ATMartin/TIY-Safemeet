import Ember from 'ember';

export default Ember.Controller.extend({
  latitude: "34",
  longitude: "-84",
  actions: {
    updateLoc: function(latLng) {
      console.log(latLng);
      this.set('latitude', latLng.k);
      this.set('longitude', latLng.D);
    }
  }
});
