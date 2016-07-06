// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  this.on('add', this.enqueue, this);
  this.on('dequeue',this.remove,this);
  this.on('ended',this.nextSong,this);
  },

  enqueue: function(){
    if(this.length ===1){
      this.playFirst();
    }
  },

  dequeue: function(){
    this.at(0).remove()
  },
  nextSong: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst()
    } 
  },

  playFirst: function(){
  // console.log(this)
  this.at(0).play();
  }

});
