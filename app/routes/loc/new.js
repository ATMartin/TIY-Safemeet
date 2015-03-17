import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    return this.geolocator.getLoc().then(function(coords) {
      return coords;
    });
  },

  setupController: function(controller, model) {
    if (model) {
      controller.set('newLoc.loc', model);
    }
  }
});
