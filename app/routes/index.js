import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  return this.geolocator.getLoc().then(
    function(data) { 
      return data; 
    }, 
    function(err) { 
      console.log("ERR!"); 
      console.log(err);
     });
},
setupController: function(controller, model) { 
  if (model) {
    console.log(model);
    controller.set('loc', model);
    controller.set('latitude', model.latitude);
    controller.set('longitude', model.longitude);
  }
}

});
