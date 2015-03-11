import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log("Index route");
    return this.parse.findAll('Location');
  }
});
