import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroIntro from './HeroIntro.styled';

describe('Hero intro', () => {
  it('renders all components', () => {
    const { container } = render(<HeroIntro />);
    console.log(container);
    expect(container).toMatchSnapshot();
  });
});
