'use strict';
var Reflux = require('reflux');
var request = require('superagent');


var actions = Reflux.createActions({
  load: {
    asyncResult: true,
    children: [],
  },

  increment: {},

  // load: {
  //   children: ['completed', 'failed'],
  // }
});

module.exports = actions;

actions.load.listen(function() {
  request.get('./data.json').end(function(err, res) {
    if (err || res.error) {
      // Counter3StoreのonLoadFailedが呼ばれる
      return this.failed(err);
    }
    // Counter3StoreのonLoadCompletedが呼ばれる
    return this.completed(res);
  }.bind(this));
});
