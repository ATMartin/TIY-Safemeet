import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  var self = this;
  return this.geolocator.getLoc().then(
    function(coords) { 
        console.log(coords);
        self.transitionTo('/map/' + coords.latitude +"/" + coords.longitude + "/30");
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
});
