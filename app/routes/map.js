import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //if (!params.range) { params.range = 30; }
    //console.log(params.range);
    var self = this;
    var coords = {
      latitude: +params.lat,
      longitude: +params.long
    };
    return this.parse.findAllByDistance('Location', coords, params.range)
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
