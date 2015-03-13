import Ember from 'ember';

export default Ember.Service.extend({
  fallback: { 
    latitude: 35,
    longitude: -84
  },
  getFallback: function() {
    return this.get('fallback');
  },
  getLoc: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(data) {
          resolve(data.coords);
        },
        function() {
          reject("Refused geoloc!"); 
        }); 
      } else {
        reject("No geoloc support!");
      } 
    });
  },
  ping: function() {
    console.log("Pong!");
  }
});
