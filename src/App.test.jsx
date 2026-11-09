import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: 'Ciaran Regan' });
  expect(heading).toBeInTheDocument();
});
