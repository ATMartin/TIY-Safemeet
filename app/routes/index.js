import Ember from 'ember';

export default Ember.Route.extend({
afterModel: function() {
//  navigator.geolocation.getCurrentPosition(function(data) { 
//    console.log(data);
    //this.controller.set('latitude', data.coords.latitude);
    //this.controller.set('longitude', data.coords.longitude);
},
setupController: function(controller) { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(data) { 
      console.log(data);
      controller.set('latitude', data.coords.latitude);
      controller.set('longitude', data.coords.longitude);
    },
    function() {
      console.log("There was an error obtaining your current location. Falling back to default...");
    });
  } else {
    console.log("Your browser does not support goelocation. Falling back to default location...");
  }
}

});
