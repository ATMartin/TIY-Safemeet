import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({  
  //serverURL: "https://frozen-headland-1730.herokuapp.com/",
  serverURL: "http://localhost:3000/",
  serverRoute: "locations/", 
  find: function(context, id) {
    return ajax(this.serverURL + this.serverRoute + id)
            .then(function(data) {
              return data;
            });
  },

  findAll: function(context) {
    return ajax(this.serverURL + this.serverRoute)
            .then(function(data) {
              return data;
            });
  },
  
  findAllByDistance: function(context, center, distance) {
    return this.findAll('rails', 'location').then(function(locs) {
      var middle = new window.google.maps.LatLng(center['latitude'], center['longitude']);  
      var destinations = locs.map(function(loc) {
        return new window.google.maps.LatLng(loc.loc[0], loc.loc[1]);
      });
      var service = new window.google.maps.DistanceMatrixService();
      return new Ember.RSVP.Promise(function(resolve) { 
        service.getDistanceMatrix({
          origins: [middle],
          destinations: destinations,
          travelMode: window.google.maps.TravelMode.DRIVING,
          unitSystem: window.google.maps.UnitSystem.IMPERIAL  
        }, function(response, status) {
          locs.forEach(function(loc, idx) {
            loc.distance = response.rows[0].elements[idx].distance.text.substring(0,4);
            loc.pos = idx;
          });
          locs = locs.filter(function(loc) {
            return +loc.distance <= distance;
          });
          resolve(locs); 
        });
      });
    });
  },

  push: function(context, object) {
    return ajax({
      url: this.serverURL + this.serverRoute,
      type: "POST",
      data: JSON.stringify(object)
    })
    .then(function(data) {
       return data; 
    });
  },

  update: function(context, object) {
    return ajax({
      url: this.serverURL + this.serverRoute + object.id,
      type: "PUT",
      data: JSON.stringify(object)
    })
    .then(function(data){
      return data;
    });
  },

});
