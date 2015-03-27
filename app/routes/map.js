import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var self = this;
    var coords = {
      latitude: +params.lat,
      longitude: +params.long
    };
    return this.store.findAllByDistance('rails', 'location', coords, params.range)
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
