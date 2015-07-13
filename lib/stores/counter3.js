'use strict';
var Reflux = require('reflux');

var Counter3Action = require('../actions/counter3');

module.exports = Reflux.createStore({
  listenables: Counter3Action,

  init: function() {
    this.count = 0;
  },

  onLoadCompleted: function(res) {
    console.log('onLoadCompleted');
    this.count = res.body.count;
    this.trigger(this.count);
  },

  onLoadFailed: function(err) {
    console.error('onLoadFailed', err);
  },

  // listenToでセットしたコールバックが呼ばれる
  onIncrement: function() {
    this.count++;
    this.trigger(this.count);
  },
});
