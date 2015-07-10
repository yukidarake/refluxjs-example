'use strict';
var Reflux = require('reflux');

var actions = Reflux.createActions([
  'increment'
]);

module.exports = actions;

// Counter2Action.increment()と呼ばれた際にhookできる
actions.increment.listen(function() {
  console.log('Counter2Action.increment called!');
});
