import Ember from 'ember';

export default Ember.Controller.extend({
  loc: {
    latitude: 34,
    longitude: -84
  },
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
    updateAddress: function() {
      var self=this;
      var loc = this.get('searchAddress');
      var range = this.get('searchRange') || 30;
      
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
      return false;
    }
  }
});
