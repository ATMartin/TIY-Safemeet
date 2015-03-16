import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  var self = this;
  return this.geolocator.getLoc().then(
    function(coords) { 
      return self.parse.findAllByDistance('Location', coords, '30')
      .then(function(locs) {
        //console.log(coords);
        locs.results.forEach(function(loc) {
          loc.distance = self.geolocator.distanceBetween(coords, loc.loc);
        });
        return {
          coords: coords,
          nearbyLocations: locs.results
        };
      });
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
  if (model) {
    controller.set('loc', model.coords);
    controller.set('nearbyLocations', model.nearbyLocations);
    //controller.set('latitude', model.latitude);
    //controller.set('longitude', model.longitude);
  }
}
});
