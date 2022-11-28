import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

test('renders home website', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Home/);
  
  expect(linkElement).toBeInTheDocument();
});
