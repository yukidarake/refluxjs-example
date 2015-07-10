'use strict';
var Reflux = require('reflux');

var actions = Reflux.createActions([
  'increment'
]);

module.exports = actions;

// CounterAction.increment()と呼ばれた際にhookできる
actions.increment.listen(function() {
  console.log('CounterAction.increment called!');
});
