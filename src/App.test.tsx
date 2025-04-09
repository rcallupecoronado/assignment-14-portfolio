import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const heading = screen.getByText(/Component Gallery – Roger Callupe/i);
  expect(heading).toBeInTheDocument();
});