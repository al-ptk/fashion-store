import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';
import Categories from './index';
import { getCategories } from '../../../assets/data/mockCategories';
import { MemoryRouter } from 'react-router-dom';

const setup = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

describe('Categories', () => {
  it('renders', () => {
    setup();
    expect(
      screen.getByRole('heading', { name: /Categories/i })
    ).toBeInTheDocument();
  });

  it.each([...getCategories()])(
    '$title points to the right page',
    (linkProps) => {
      setup();
      const link = screen.getByRole('link', { name: linkProps.title });
      userEvent.click(link);
      const pattern = new RegExp('search for: ' + linkProps.title, 'i');
      const title = screen.getByRole('heading', { name: pattern });
      expect(title).toBeInTheDocument();
    }
  );
});
