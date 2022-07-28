import React from 'react';
import Heading2 from '../../../components/HomeSubHeading.styled';
import { FeaturedContainer, StyledCard } from './Featured.styled';

export function Featured({ productList }) {
  return (
    <>
      <Heading2>Featured:</Heading2>
      <FeaturedContainer>
        {productList.map((productProps) => (
          <FeaturedCard key={productProps.id} {...productProps} />
        ))}
      </FeaturedContainer>
    </>
  );
}

const FeaturedCard = (props) => {
  const { imageURL, title, id } = props;
  return (
    <StyledCard to={`/products/${id}`} image={imageURL}>
      <h3 style={{ width: 'auto', height: '1em' }}>{title.en}</h3>
    </StyledCard>
  );
};
