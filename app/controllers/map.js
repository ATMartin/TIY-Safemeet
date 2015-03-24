import Ember from 'ember';

export default Ember.Controller.extend({
  loc: {
    latitude: 34,
    longitude: -84
  },
  //nearbyLocations: function() {
  //  var model = this.get('model');
  //  var locations = model.nearbyLocations;
  //  locations.forEach(function(loc) {
  //    loc.distance = this.geolocator.distanceBetween(model.coords, loc.loc);
  //  });
  //  return locations;
  //},
  searchAddress: null,
  searchRange: null,
  actions: {
    test: function() {
    console.log(Ember.View.views);
    },
    openModal: function() {
      // Figured this out courtesy of ic-modal. Noice!
      var modal = Ember.View.views['modal-about'];
      modal.send('toggleModal');
    },
    //findAddress: function() {
    //  this.geolocator.getLocFromAddress(this.get('searchAddress'));
      //console.log(this.get('searchAddress'));
    //  return false;
    //},
    updateAddress: function() {
      var self=this;
      var loc = this.get('searchAddress');
      var range = this.get('searchRange') || 30;
      //if (!range) { range = 30; }
      
      if (loc) {
        this.geolocator.getLocFromAddress(loc).then(function(data) {
          console.log(data);
          var coords = data[0].geometry.location;
          self.transitionToRoute('/map/' + coords.k + '/' + coords.D + '/' + range);  
        });  
      } else {
       var coords = this.get('loc');
       self.transitionToRoute('/map/' + coords.latitude + '/' + coords.longitude + '/' + range);
      }
     /* 
    findAddress: function() {
      var self = this;
      var address = this.get('searchAddress');
      this.geolocator.getLocFromAddress(address).then(function(data) { 
        //console.log(data); 
        var coords = data[0].geometry.location;
        self.transitionToRoute('map',{lat: coords.k , long: coords.D, range: 30 });
      }); 
      //Prevent page refresh on submission - just in case.
      return false;
    }
     */ 
      return false;
    }
  }
});
