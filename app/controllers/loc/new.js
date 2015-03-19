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
  
  feature24Hr: false,
  featureSeating: false,
  featurePower: false,

  marker: {
    setMap: function() {}  
  },
  actions: {
    updateLocWithMarker: function(latLng, map) {
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
      var self = this;
      if (this.feature24Hr) { this.get('newLoc.features').push('24hr'); }
      if (this.featureSeating) { this.get('newLoc.features').push('seating'); }
      if (this.featurePower) { this.get('newLoc.features').push('power'); }

      console.log(this.get('newLoc'));
      this.parse.push('Location', this.get('newLoc')).then(function(data) {
        self.parse.find('Location', data.objectId).then(function(loc) {
          self.transitionToRoute('loc.view', loc);    
        });
      });
    }
  }
});
