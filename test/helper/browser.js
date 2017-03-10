require('babel-register')();

var ReactTestUtils = require('react-addons-test-utils')
var jsdom = require('jsdom').jsdom;

//var _ = require('lodash');

var exposedProperties = ['window', 'navigator', 'document', '_'];

global._ = require('lodash');
 
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
