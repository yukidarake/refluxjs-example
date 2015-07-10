'use strict';
var React = require('react');
var Reflux = require('reflux');

var CounterAction = require('../actions/counter');
var CounterStore = require('../stores/counter');

module.exports = React.createClass({
  mixins: [
    // this.state.clickCountにCounterStoreで
    // this.trigger(value)
    // したvalueがセットされる
    Reflux.connect(CounterStore, 'clickCount')
  ],

  getInitialState: function() {
    return {
      clickCount: 0
    };
  },

  handleClick: function() {
    CounterAction.increment();
  },

  render: function() {
    return (
      <div>
        <h2>Counter かなり省略した書き方のカウンタ</h2>
        <h3>Number of clicks: {this.state.clickCount}</h3>
        <button onClick={this.handleClick}>クリック！</button>
      </div>
    );
  }
});
