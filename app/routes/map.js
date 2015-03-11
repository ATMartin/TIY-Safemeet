import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return { 
      lat: params.lat,
      long: params.long
    };
  },
  renderTemplate: function() {
    this.render({outlet: 'map'});  
  }
});
