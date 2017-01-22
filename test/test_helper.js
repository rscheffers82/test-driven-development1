import jquery from 'jquery';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set pu testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = jquery(window);

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props = {}, state = {}) {
  // ComponentClass = the class itself class 'Todo extends Component {}'
  // componentInstance = the actual version / instance of that class '</Todo>'
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $( ReactDOM.findDOMNode(componentInstance) ); // this produces HTML
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  // ^ add a function to the jquery library
  TestUtils.Simulate[eventName](this[0]);
}
// To call simulate
// $('<div>').simulate();


export  { renderComponent, expect };




// import _$ from 'jquery';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import jsdom from 'jsdom';
// import chai, { expect } from 'chai';
// import chaiJquery from 'chai-jquery';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../src/reducers';
//
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = global.document.defaultView;
// global.navigator = global.window.navigator;
// const $ = _$(window);
//
// chaiJquery(chai, chai.util, $);
//
// function renderComponent(ComponentClass, props = {}, state = {}) {
//   const componentInstance =  TestUtils.renderIntoDocument(
//     <Provider store={createStore(reducers, state)}>
//       <ComponentClass {...props} />
//     </Provider>
//   );
//
//   return $(ReactDOM.findDOMNode(componentInstance));
// }
//
// $.fn.simulate = function(eventName, value) {
//   if (value) {
//     this.val(value);
//   }
//   TestUtils.Simulate[eventName](this[0]);
// };
//
// export {renderComponent, expect};
