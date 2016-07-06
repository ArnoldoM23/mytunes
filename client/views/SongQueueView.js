// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  initialize: function() {
    this.render()
    this.collection.on('add', function(){
      this.render()
    }, this)
    this.collection.on('ended', function(){
      this.render()
    }, this)
  },

  render: function() {
    this.$el.children().detach();
    console.log(this.collection)
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  
  },

});
