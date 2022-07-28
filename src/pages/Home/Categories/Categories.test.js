import App from '../../../App';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

describe('Categories', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Categories/i })
    ).toBeInTheDocument();
  });
});
