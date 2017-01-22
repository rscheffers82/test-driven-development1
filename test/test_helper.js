import jquery from 'jquery';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// Set pu testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window - global.document.defaultView;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // ComponentClass = the class itself class 'Todo extends Component {}'
  // componentInstance = the actual version / instance of that class '</Todo>'
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );

  return $( ReactDOM.findDOMNode(componentInstance) ); // this produces HTML
}

// Build helper for simulating events


// Set up chai-jquery

export  { renderComponent, expect };
