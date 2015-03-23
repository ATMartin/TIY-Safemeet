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
      var self = this;
      var address = this.get('searchAddress');
      this.geolocator.getLocFromAddress(address).then(function(data) { 
        //console.log(data); 
        var coords = data[0].geometry.location;
        self.transitionToRoute('map',{lat: coords.k , long: coords.D, range: 30 });
      }); 
      //Prevent page refresh on submission - just in case.
      return false;
    }
  }
});
