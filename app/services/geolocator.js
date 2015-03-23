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
    }, {maximumAge: 0, timeout: 10000});
  },
  getLocFromAddress: function(address) {
    var gc = new window.google.maps.Geocoder();
    return new Ember.RSVP.Promise(function(resolve, reject) {
      gc.geocode({address: address}, function(res, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          resolve(res);
        } else { 
          resolve({'message':'NOPE'});
        }
      });
    });
  },
  getCurrentZip: function(context, target) {
    //alert('Not yet implemented!');
    var geocoder = new window.google.maps.Geocoder();
    var latlng;
    return this.getLoc().then(function(coords) {
      latlng = new window.google.maps.LatLng(coords.latitude, coords.longitude);
      console.log(latlng);
    }).then(function() { 
      return geocoder.geocode({'latLng': latlng}, function(results) {
        console.log(results);
        results[0].address_components.forEach(function(component) {
          if (component.types[0] === "postal_code") { 
            context.set(target, component.long_name);
          } 
        });
      });
    });
    /*
      geocoder.geocode({'latLng': new window.google.maps.LatLng(coords.latitude, coords.longitude)}, function(results) {
        results[0].address_components.forEach(function(component) {
          if (component.types[0] === "postal_code") {
            return component.long_name;
          }
        });
      });
      
    });
    */
  },
    // Adapted from Parse JS SDK
    // Credit to https://parse.com/downloads/javascript/parse-1.3.5.js
  distanceBetween: function(point1, point2) {
    var d2r = Math.PI / 180.0;
    var lat1rad = point1.latitude * d2r;
    var long1rad = point1.longitude * d2r;
    var lat2rad = point2.latitude * d2r;
    var long2rad = point2.longitude * d2r;
    var deltaLat = lat1rad - lat2rad;
    var deltaLong = long1rad - long2rad;
    var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
    var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
    // Square of half the straight line chord distance between both points.
    var a = ((sinDeltaLatDiv2 * sinDeltaLatDiv2) +
                             (Math.cos(lat1rad) * Math.cos(lat2rad) *
    sinDeltaLongDiv2 * sinDeltaLongDiv2));
    a = Math.min(1.0, a);
    var floater =  2 * Math.asin(Math.sqrt(a)) * 395880;
    return Math.floor(floater)/100;
  },
  ping: function() {
    console.log("Pong!");
  }
});
