import React from 'react';
import {
  FeaturedContainer,
  FeaturedTitle,
  StyledCard,
} from './Featured.styled';

export function Featured({ productList }) {
  return (
    <>
      <FeaturedTitle>Featured:</FeaturedTitle>
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
