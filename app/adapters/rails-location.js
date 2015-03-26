import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({  
  //serverURL: "https://frozen-headland-1730.herokuapp.com/",
  serverURL: "http://localhost:3000/",
  serverRoute: "locations/", 
  find: function(context, id) {
    return ajax(this.serverURL + this.serverRoute + id)
            .then(function(data) {
              return data;
            });
  },

  push: function(context, object) {
    
    return ajax({
      url: this.serverURL + this.serverRoute,
      type: "POST",
      data: JSON.stringify(object)
    })
    .then(function(data) {
       return data; 
    });
  },

});
