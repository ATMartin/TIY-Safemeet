import Ember from 'ember';

export default Ember.Route.extend({
  model: function() { 
    return this.geolocator.getLoc().then(function(coords) {
      return coords;
    });
  },

  setupController: function(controller, model) {
    if (model) {
      console.log(model); 
      controller.set('newLoc.loc.latitude', +model.latitude);
      controller.set('newLoc.loc.longitude', +model.longitude);
    }
  }
});
