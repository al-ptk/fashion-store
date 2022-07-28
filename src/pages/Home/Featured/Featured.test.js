import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../App';

describe('Featured', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Featured/i })
    ).toBeInTheDocument();
  });
});
