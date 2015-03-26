import Ember from 'ember';

export default Ember.Controller.extend({
  newLoc: {
    name: "",
    description: "",
    address: null,
    feature24hr: false,
    featureSeating: false,
    featurePower: false,
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
      console.log(this.get('newLoc'));
      this.store.push('rails', 'location', this.get('newLoc')).then(function(loc) {
        //self.store.find('rails', 'location', data.id).then(function(loc) {
          console.log(loc);
          self.transitionToRoute('loc.view', loc);    
        //});
        //console.log(data);
      });
    }
  }
});
