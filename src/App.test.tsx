import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the PavoSoft home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /transform your business with technology/i })).toBeInTheDocument();
});
