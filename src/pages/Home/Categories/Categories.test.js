import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../../../App';
import { getCategories } from '../../../assets/data/mockCategories';

describe('Categories', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Categories/i })
    ).toBeInTheDocument();
  });

  it.each(getCategories())('$title points to the right page', (linkProps) => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: linkProps.title })
    ).toBeInTheDocument();
  });
});
