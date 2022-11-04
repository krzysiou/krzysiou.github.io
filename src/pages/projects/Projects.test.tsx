import React from 'react';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';

test('renders projects website', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/This is projects/i);
  expect(linkElement).toBeInTheDocument();
});
