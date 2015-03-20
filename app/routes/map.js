import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return { 
      lat: params.lat,
      long: params.long
    };
  },
  setupController: function(controller, model) {
    console.log(model);
    controller.loc.latitude = +model.lat;
    controller.loc.longitude = +model.long;
  }
});
