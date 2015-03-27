import Ember from 'ember';
import layout from '../templates/components/google-maps';

export default Ember.Component.extend({
  map: {},
  markers: [],
  insertMap: function() {
    var container = this.$('.map-canvas');
    var options = {
      center: new window.google.maps.LatLng(
        this.get("lat"),
        this.get("long")
      ),
      zoom: 15
    };
    this.set('map', new window.google.maps.Map(container[0], options));
    if (this.get("marked")) {
      var icon = 'assets/img/safemeet-logo.png'; 
      this.set('marker', new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
            this.get('lat'),
            this.get('long')
          ),
          map: this.get('map'),
          icon: icon,
          title: 'You are here!'
        })
      );  
    }

    if (this.get("loc-list")) {
      var locations = this.get('loc-list');
      var _this = this;
      locations.forEach(function(loc) {
        var mark = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
            loc.loc[0],
            loc.loc[1]
          ),
          map: _this.get('map'),
          //icon: 'assets/img/safemeet-logo.png',
          icon: 'http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+ loc.pos +'|FF776B|000000',
          title: loc.name  
        });
        _this.get('markers').push(mark);
      });  
    }
    
    var self = this;
    window.google.maps.event.addListener(this.get('map'), 'click', function(e) {
      if (self.get('marker') && self.get('canEdit')) { 
        self.get('marker').setMap(null);
        self.set('marker', null);
      }
      self.sendAction('action', e.latLng, self.get('map'));
    });
  }.on('didInsertElement'),
  triggerRedraw: function() {
    this.insertMap();
  }.observes('lat', 'long'),
  layout: layout
});
