import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  var self = this;
  return this.geolocator.getLoc().then(
    function(coords) { 
      //return self.parse.findAllByDistance('Location', coords, '30')
      //.then(function(locs) {
      //  locs.forEach(function(loc, idx) {
      //    loc.pos = idx;
      //    loc.distance = self.geolocator.distanceBetween(coords, loc.loc);
      //  });
        console.log(coords);
        //self.transitionTo('map', { lat: coords.latitude, long: coords.longitude, range: 30 });
        self.transitionTo('/map/' + coords.latitude +"/" + coords.longitude + "/30");
        //return {
        //  coords: coords,
        //  nearbyLocations: locs
        //};
    }, 
    function(err) { 
      console.log("ERR!"); 
      console.log(err);
      return {
        message: "Error!",
        data: err
      };
     });
}
/*
setupController: function(controller, model) { 
  if (model) {
    controller.set('loc', model.coords);
    controller.set('nearbyLocations', model.nearbyLocations);
  }
}
*/
});
