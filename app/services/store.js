import Ember from 'ember';

export default Ember.Service.extend({
  find: function(db, context, id) {
    var adapter = this.container.lookup('adapter:' + db + '-' + context);
    return adapter.find(context, id);
  },

  findAll: function(db, context) {
    var adapter = this.container.lookup('adapter:' + db + '-' + context);
    return adapter.findAll(context);
  },

  findAllByUser: function(context, user) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.findAllByUser(context, user); 
  },

  findAllByDistance: function(context, center, distance) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.findAllByDistance(context, center, distance);
  },

  push: function(db, context, object) {
    var adapter = this.container.lookup('adapter:' + db + '-' + context);
    return adapter.push(context, object);
  },

  update: function(db, context, object) {
    var adapter = this.container.lookup('adapter:' + db + '-' + context);
    return adapter.update(context, object);
  },

  destroy: function(db, context, object) {
    var adapter = this.container.lookup('adapter:' + db + '-' + context);
    return adapter.destroy(context, object);
  }
});
