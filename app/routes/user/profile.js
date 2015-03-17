import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.parse.find('user', params.user_id); 
  }
});
