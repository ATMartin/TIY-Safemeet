import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  sharePhone: '',
  hasPhone: function() {
    return (this.get('sharePhone').length !== 12);
  }.property('sharePhone'),
  actions: {
    gotoEdit: function() {
      this.transitionToRoute('loc.edit', this.get('model'));
    },
    shareViaSMS: function() {
      var user = this.session.isAuthenticated ? 'User @' + this.session.currentUser.nickname : "Someone";
      var data = {
        recNumber: '+1' + this.get('sharePhone').split('-').join(''),
        messageBody: user + " has shared this Safemeet with you!: " + window.location.href
      };
      this.set('sharePhone', 'Sending...');
      var _this = this;
      ajax({
        type: "POST",
        url: "https://frozen-headland-1730.herokuapp.com/locations/sms",
        data: data
      }).then(function(response) { 
        if (response.type === "Success") {
          _this.set('sharePhone', 'Success!');
        } else {
          _this.set('sharePhone', 'Error!');
          alert("Message failed to send - check console for error hints!");
        }
      }).finally(function() {
          setTimeout(function() { _this.set('sharePhone', ''); }, 4000);
      });
    }
  }
});
