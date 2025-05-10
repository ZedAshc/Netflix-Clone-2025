'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./App.css');

var _pagesHomeHome = require('./pages/Home/Home');

var _pagesHomeHome2 = _interopRequireDefault(_pagesHomeHome);

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(_pagesHomeHome2['default'], null)
  );
}

exports['default'] = App;
module.exports = exports['default'];