var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

var contacts =[
	{id:1, name: 'Scott', phone: '555-555-5555'},
	{id:2,name: 'Sally', phone: '555-333-5555'},
	{id:3,name: 'Bob', phone: '555-555-1111'},
];

ReactDOM.render(
  <App contacts={contacts}/>,
  document.getElementById('app')
);