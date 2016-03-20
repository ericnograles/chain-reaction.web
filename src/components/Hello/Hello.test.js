import * as React from 'react';
import expect from 'expect';
import {Simulate, renderIntoDocument} from 'react-addons-test-utils';
import Hello from './Hello';

describe('/components/Hello', () => {
  it('should pass a dummy test', () => {
    expect(true).toBe(true, 'This is a unit test');
  });

  it('should render with a custom message', () => {
    var logOutHandled = false;
    var handleLogout = () => {
      logOutHandled = true;
    };
    const name = 'tester von testerson';
    const item = renderIntoDocument(
      <Hello name={name} handleLogout={handleLogout}  />
    );

    // Test logout
    item.props.handleLogout();

    // Assertions
    expect(item.refs.name.textContent).toBe('Hello, ' + name + '!');
    expect(item.props.name).toBe(name);
    expect(logOutHandled).toBe(true);
  });
});