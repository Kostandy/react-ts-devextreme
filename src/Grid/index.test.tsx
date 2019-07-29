import React from 'react';
import ReactDOM from 'react-dom';
import DevGrid from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DevGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
