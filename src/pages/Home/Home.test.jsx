import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home page', () => {
  it('renders properly', () => {
    render(<Home />);
    const main = screen.getByRole('main', { name: 'Home page' });
    expect(main).toMatchSnapshot();
  });
});
