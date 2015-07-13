'use strict';
var React = require('react');
var Reflux = require('reflux');

var Counter3Action = require('../actions/counter3');
var Counter3Store = require('../stores/counter3');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(Counter3Store, 'onLoadCompleted'),
    Reflux.listenTo(Counter3Store, 'onIncrement'),
  ],

  componentDidMount: function() {
    Counter3Action.load();
  },

  getInitialState: function() {
    return {
      clickCount: null,
    };
  },

  onLoadCompleted: function(count) {
    this.setState({
       clickCount: count
    });
  },

  onIncrement: function(count) {
    this.setState({
       clickCount: count
    });
  },

  handleClick: function() {
    Counter3Action.increment();
  },

  render: function() {
    return (
      <div>
        <h2>Counter3 Ajaxで初期データを取得するカウンタ</h2>
        <h3>Number of clicks: {this.state.clickCount}</h3>
        <button onClick={this.handleClick}>クリック！</button>
      </div>
    );
  }
});
