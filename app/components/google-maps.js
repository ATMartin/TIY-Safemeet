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
    this.set('map', new window.google.maps.Map(container[0], options));
    var self = this;
    window.google.maps.event.addListener(this.get('map'), 'click', function(e) {
      self.sendAction('action', e.latLng);
    });
  }.on('didInsertElement'),
  shout: function() {
    console.log('');
  }.observes('map'),

  
  
  layout: layout
});
