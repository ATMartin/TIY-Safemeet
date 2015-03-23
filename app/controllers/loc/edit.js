import Ember from 'ember';

export default Ember.Controller.extend({
  oldModel: {},
  marker: {
    setMap: function() {}
  },
  featureToggle: function(featureName) {
    var currentFeatures = this.get('model.features');
    var hasFeature = currentFeatures.indexOf(featureName);
    if (hasFeature !== -1) {
      console.log("has it");
      currentFeatures.splice(hasFeature, 1);
    } else {
      console.log("nope");
      currentFeatures.push(featureName);
    }
    console.log(currentFeatures);
    this.set('model.features', currentFeatures);
    return hasFeature > -1;
  }, 
   
  feature24hr: false, 
  featureSeating: false, 
  featurePower: false, 
  
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
      var features = [];
      if (this.feature24hr) { features.push('24hr'); }
      if (this.featureSeating) { features.push('seating'); }
      if (this.featurePower) { features.push('power'); }
      this.set('model.features', features);
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
