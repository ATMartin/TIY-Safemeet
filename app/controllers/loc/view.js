import Ember from 'ember';

export default Ember.Controller.extend({
  feature24Hr: function() {
    return (this.get('model.features').indexOf("24hr") > -1);
  }.property('model.features'),
  
  featureSeating: function() {
    return this.get('model.features').indexOf("seating") > -1 ? true : false;
  }.property('model.features'),

  // It appears the following won't work to DRY this code up.
  // BOOOO, Handlebars limitations. :(
  hasFeature: function(feature) {
    return this.get('model.features').indexOf(feature) > -1 ? true : false;
  }.property('model.features'),
  
  actions: {
    gotoEdit: function() {
      this.transitionToRoute('loc.edit', this.get('model'));
    }
  }
});
