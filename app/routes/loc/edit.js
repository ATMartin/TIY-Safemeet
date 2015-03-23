import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.parse.find('Location', params.loc_id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.feature24hr = model.features.indexOf('24hr') !== -1;
    controller.featureSeating = model.features.indexOf('seating') !== -1;
    controller.featurePower = model.features.indexOf('power') !== -1;
  }
});
