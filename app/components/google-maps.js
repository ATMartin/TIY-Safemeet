import Ember from 'ember';
import layout from '../templates/components/google-maps';

export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$('.map-canvas');
    var options = {
      center: new window.google.maps.LatLng(
        this.get("lat"),
        this.get("long")
      ),
      zoom: 7
    };
    new window.google.maps.Map(container[0], options);
  }.on('didInsertElement'),

  
  
  layout: layout
});
