import Ember from 'ember';

export default Ember.Controller.extend({
  oldModel: {},
  marker: {
    setMap: function() {}
  },
  actions: {
    updateLocWithMarker: function(latLng, map) {
      console.log(latLng);
      this.set('model.loc.latitude', latLng.k);  
      this.set('model.loc.longitude', latLng.D);
      this.get('marker').setMap(null);
      this.set('marker', new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          latLng.k,
          latLng.D
        ),
        map: map
      }));
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
