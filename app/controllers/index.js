import Ember from 'ember';

export default Ember.Controller.extend({
  loc: {
    latitude: 34,
    longitude: -84
  },
  nearbyLocations: function() {
    var model = this.get('model');
    var locations = model.nearbyLocations;
    locations.forEach(function(loc) {
      console.log(loc);
      loc.distance = this.geolocator.distanceBetween(model.coords, loc.loc);
      console.log(loc.distance);
    });
    return locations;
  },
  actions: {
  }
});
