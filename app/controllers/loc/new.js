import Ember from 'ember';

export default Ember.Controller.extend({
  newLoc: {
    name: "",
    description: "",
    features: [],
    location: {
      __type: "GeoPoint",
      latitude: "34",
      longitude: "-84"
    }
  },
  actions: {
    updateLoc: function(latLng) {
      console.log(latLng);
      this.set('newLoc.location.latitude', latLng.k);
      this.set('newLoc.location.longitude', latLng.D);
    },
    saveNewLocation: function() {
      console.log(this.get('newLoc'));
      this.parse.push("Location", this.get('loc'));
    }
  }
});
