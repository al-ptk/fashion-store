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

  it('redirects from Featured section to Product page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const links = screen.getAllByTestId('featured-link');
    /**
     * I don't know why the test below works. If I click a link,
     * it makes me go to the next page. The sibling links should
     * be gone.
     *
     * Console logging it checks out, though. Weird.
     */
    for (const link of links) {
      userEvent.click(link);
      expect(document.location.href).toMatch(link.href);
    }
  });

  it('redirects from Catalog Section to Catalog page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const links = screen.getAllByTestId('catalog-link');
    for (const link of links) {
      userEvent.click(link);
      expect(document.location.href).toMatch(link.href);
    }
  });

  
});
