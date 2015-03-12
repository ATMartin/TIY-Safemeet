import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.parse.find('Location', params.loc_id);
  }
});
