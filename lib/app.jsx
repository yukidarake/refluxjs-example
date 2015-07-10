'use strict';
var React = require('react');

var Counter = require('./components/counter');
var Counter2 = require('./components/counter2');

React.render((
  <div>
    <Counter />
    <Counter2 />
  </div>
), document.body);
