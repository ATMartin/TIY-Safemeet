import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  var self = this;
  return this.geolocator.getLoc().then(
    function(data) { 
      console.log(data);
      self.parse.findAllByDistance('Location', data, '30');
      return data;
    }, 
    function(err) { 
      console.log("ERR!"); 
      console.log(err);
      return {
        message: "Error!",
        data: err
      };
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
