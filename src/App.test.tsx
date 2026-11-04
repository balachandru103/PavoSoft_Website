import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PavoSoft navigation and brand', () => {
  render(<App />);
  expect(screen.getAllByAltText(/PavoSoft/i)[0]).toBeInTheDocument();
});
