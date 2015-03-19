import Ember from 'ember';
import layout from '../templates/views/scrollpanel';

export default Ember.View.extend({
  bindScroll: function() {
    this.$('.content').on('scroll', this.scroll);
  }.on('didInsertElement'),
  //loadElementList: function() {
  //  var elements = this.get('elements');
  //  var self = this;
  //  elements.forEach( function(el) {
  //    console.log(el);
  //    self.$('.scrollpanel').append('<li>' + el.name + '</li>');
  //  });
  //}.on('didInsertElement'),
  click: function() {
    this.$('.content').append('<h2>SCROLLFILL</h2>');
  },
  scroll: function() {
    var indicatorUp = Ember.$(this).parent().find('.up-scroll');
    var indicatorDown = Ember.$(this).parent().find('.down-scroll');
    //this.scrollTop === 0 ? indicatorUp.hide() : indicatorUp.show();
    if (this.scrollTop === 0) {
      indicatorUp.hide();
    } else {
      indicatorUp.show();
    }
    
    if (this.clientHeight + this.scrollTop + 5  >= this.scrollHeight) {
      indicatorDown.hide();
    } else {
      indicatorDown.show();
    }
  },
  layout: layout  
});
