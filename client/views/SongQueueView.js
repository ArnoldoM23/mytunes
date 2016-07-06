// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  template: _.template('<p><%=  %/></p>'),
  initialize: function() {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes))
  },

});
