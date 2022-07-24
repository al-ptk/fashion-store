import React from 'react';
import { FeaturedContainer, FeaturedTitle } from './Featured.styled';

export function Featured({ productList }) {
  return (
    <>
      <FeaturedTitle>Featured:</FeaturedTitle>
      <FeaturedContainer></FeaturedContainer>
    </>
  );
}
