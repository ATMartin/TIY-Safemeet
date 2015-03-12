import Ember from 'ember';

export default Ember.Controller.extend({
  oldModel: {},
  actions: {
    updateLoc: function(latLng) {
      console.log(latLng);
      this.set('model.loc.latitude', latLng.k);  
      this.set('model.loc.longitude', latLng.D);
    },
    updateLocation: function() {
      this.parse.update('Location', this.get('model'));
      this.transitionToRoute('loc.view', this.get('model'));  
    },
    deleteLocation: function() {
      if (confirm("Are you sure?")) {
        this.parse.destroy('Location', this.get('model'));
        this.transitionToRoute('/');
      }
    },
    gotoIndex: function() {
      this.transitionToRoute('loc.view', this.parse.find('Location', this.get('model.id')));  
    }
  }
});
