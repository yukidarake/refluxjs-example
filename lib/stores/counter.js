'use strict';
var Reflux = require('reflux');

var CounterAction = require('../actions/counter');

module.exports = Reflux.createStore({
  listenables: CounterAction,

  init: function() {
    this.count = 0;
  },

  // listenablesを使うと、
  // CounterActionのincrementメソッドに"on"を付けたものが呼ばれる
  onIncrement: function() {
    this.count++;
    this.trigger(this.count);
  },
});
