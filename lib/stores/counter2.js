'use strict';
var Reflux = require('reflux');

var Counter2Action = require('../actions/counter2');

module.exports = Reflux.createStore({
  init: function() {
    this.count = 0;
    this.listenTo(Counter2Action.increment, this.onIncrement);
  },

  // listenToでセットしたコールバックが呼ばれる
  onIncrement: function() {
    this.count++;
    this.trigger(this.count);
  },
});
