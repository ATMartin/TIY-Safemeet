import Ember from 'ember';

export default Ember.Service.extend({
  find: function(context, id) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.find(context, id);
  },

  findAll: function(context) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.findAll(context);
  },

  findAllByUser: function(context, user) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.findAllByUser(context, user); 
  },

  push: function(context, object) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.push(context, object);
  },

  update: function(context, object) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.update(context, object);
  },

  destroy: function(context, object) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.destroy(context, object);
  }
});
