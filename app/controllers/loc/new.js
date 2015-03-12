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
  marker: {
    setMap: function() {}  
  },
  actions: {
    updateLocWithMarker: function(latLng, map) {
      console.log(latLng);
      console.log(map);
      this.set('newLoc.loc.latitude', latLng.k);
      this.set('newLoc.loc.longitude', latLng.D);
      this.get('marker').setMap(null);
      this.set('marker', new window.google.maps.Marker({
        position: new window.google.maps.LatLng(latLng.k, latLng.D),
        map: map  
      }));
      console.log(this.get('marker'));
    },
    saveNewLocation: function() {
      console.log(this.get('newLoc'));
      this.parse.push("Location", this.get('newLoc'));
      //this.transitionToRoute('loc.view', this.get('model'));
    }
  }
});
