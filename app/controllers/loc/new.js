import Ember from 'ember';

export default Ember.Controller.extend({
  newLoc: {
    name: "",
    description: "",
    features: [],
    loc: {
      __type: "GeoPoint",
      latitude: 34,
      longitude: -84
    }
  },
  actions: {
    updateLoc: function(latLng) {
      console.log(latLng);
      this.set('newLoc.loc.latitude', latLng.k);
      this.set('newLoc.loc.longitude', latLng.D);
    },
    saveNewLocation: function() {
      console.log(this.get('newLoc'));
      this.parse.push("Location", this.get('newLoc'));
      //this.transitionToRoute('loc.view', this.get('model'));
    }
  }
});
