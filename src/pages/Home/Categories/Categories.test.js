import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../../../App';
import Categories from './index';

describe('Categories', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Categories/i })
    ).toBeInTheDocument();
  });

  it.each([
    ['catgory1', '?filter=category1'],
    ['catgory2', '?filter=category2'],
    ['catgory3', '?filter=category3'],
    ['catgory4', '?filter=category4'],
    ['catgory5', '?filter=category5'],
    ['catgory6', '?filter=category6'],
    ['catalog', '?filter='],
  ])('%s points to the right page', (linkTitle, linkPath) => {
    render(<App />);
    expect(screen.getByRole('link', { name: linkTitle })).toBeInTheDocument();
  });
});
