import Ember from 'ember';

export default Ember.Controller.extend({
  loc: {
    latitude: 34,
    longitude: -84
  },
  //nearbyLocations: function() {
  //  var model = this.get('model');
  //  var locations = model.nearbyLocations;
  //  locations.forEach(function(loc) {
  //    loc.distance = this.geolocator.distanceBetween(model.coords, loc.loc);
  //  });
  //  return locations;
  //},
  actions: {
    test: function() {
      console.log(this.session);
    },
    findAddress: function() {
      this.geolocator.getLocFromAddress(this.get('searchAddress'));
      console.log(this.get('searchAddress'));
      return false;
    }
  }
});
