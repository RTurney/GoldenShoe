import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// Outdated test
// it('displays the name of the website', () => {
//   render(<App />);
//   expect(screen.getByText('Golden Shoe')).toBeInTheDocument();
// });
