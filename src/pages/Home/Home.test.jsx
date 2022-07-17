import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home page', () => {
  it('renders properly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const main = screen.getByRole('main', { name: 'Home page' });
    expect(main).toMatchSnapshot();
  });

  it('redirects to product page when Featured product clicked', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const link = screen.getByRole('link', { name: '012' });
    expect(link).toBeInTheDocument();
    userEvent.click(link);
    expect(document.location.pathname).toMatch('/product/012');
  });
});
