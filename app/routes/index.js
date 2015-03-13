import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  /*
  if we're logged in -
    get our home location
  else if we have geolocation -
    get our current location
  else
    get our fallback location
  AND THEN
    with that location
      get safemeet locations nearby
  */
  /*
  var session = this.get('session');
  if (session.isAuthenticated) {
    console.log(session);
  } else {
    console.log('Nope');
  }
  */
  return this.geolocator.getLoc().then(
    function(data) { 
      console.log(data); 
    }, 
    function(err) { 
      console.log("ERR!"); 
      console.log(err);
     });
  //this.geolocator.ping();
},
setupController: function(controller) { 
  /*
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(data) { 
      console.log(data);
      controller.set('loc', data.coords);
      controller.set('latitude', data.coords.latitude);
      controller.set('longitude', data.coords.longitude);
    },
    function() {
      console.log("There was an error obtaining your current location. Falling back to default...");
    });
  } else {
    console.log("Your browser does not support goelocation. Falling back to default location...");
  }
  */
}

});
