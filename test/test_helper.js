import jquery from 'jquery';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

// Set pu testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window - global.document.defaultView;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  // ComponentClass = the class itself class 'Todo extends Component {}'
  // componentInstance = the actual version / instance of that class '</Todo>'
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

  ReactDOM.findDOMNode(componentInstance); // this preduces HTML
}

// Build helper for simulating events


// Set up chai-jquery
