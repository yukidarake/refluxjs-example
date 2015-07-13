'use strict';
var React = require('react');

var Counter = require('./components/counter');
var Counter2 = require('./components/counter2');
var Counter3 = require('./components/counter3');

React.render((
  <div>
    <Counter />
    <Counter2 />
    <Counter3 />
  </div>
), document.body);
