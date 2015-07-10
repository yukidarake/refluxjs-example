'use strict';
var React = require('react');
var Reflux = require('reflux');

var Counter2Action = require('../actions/counter2');
var Counter2Store = require('../stores/counter2');

module.exports = React.createClass({
  mixins: [
    // CounterStoreで
    // this.trigger(value)
    // で渡したvalueが、onCrement(value)として呼ばれる
    Reflux.listenTo(Counter2Store, 'onIncrement')
  ],

  getInitialState: function() {
    return {
      clickCount: 0
    };
  },

  onIncrement: function(count) {
    this.setState({
       clickCount: count
    });
  },

  handleClick: function() {
    Counter2Action.increment();
  },

  render: function() {
    return (
      <div>
        <h2>Counter2 ちょっと冗長な書き方をしたカウンタ</h2>
        <h3>Number of clicks: {this.state.clickCount}</h3>
        <button onClick={this.handleClick}>クリック！</button>
      </div>
    );
  }
});
