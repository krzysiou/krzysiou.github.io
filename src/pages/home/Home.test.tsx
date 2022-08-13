import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders home website', () => {
  render(<Home />);
  const linkElement = screen.getByText(/This is home/i);
  expect(linkElement).toBeInTheDocument();
});
