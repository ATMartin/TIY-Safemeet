import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var self = this;
    var coords = {
      latitude: +params.lat,
      longitude: +params.long
    };
    return this.store.findAllByDistance('rails', 'location', coords, params.range)
    /*
    .then(function(locs) {
      locs.forEach(function(loc, idx) {
        loc.pos = idx;
        loc.distance = self.geolocator.distanceBetween(coords, loc.loc);  
      });
      console.log(locs); 
      return {
        coords: coords,
        nearbyLocations : locs
      };
    */
    .then(function(data) {  
      console.log(data);
      return {
        coords: coords,
        nearbyLocations: data
      };
    },
    function(err) {
      console.log("ERR!");
      console.log(err);
      return {
        message: "Error!",
        data: err
      };
    });
  },
  setupController: function(controller, model) {
    console.log(model);
    controller.loc.latitude = model.coords.latitude;
    controller.loc.longitude = model.coords.longitude;
    controller.nearbyLocations = model.nearbyLocations;
  }
});
