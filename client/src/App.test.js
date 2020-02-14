import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import NavBar from './Components/NavBar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test("renders NavBar component without crashing", () => {
  render(<NavBar />)
});
