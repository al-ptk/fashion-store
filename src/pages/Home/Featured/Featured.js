import React from 'react';
import { Link } from 'react-router-dom';
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
        {productList.map((elem) => (
          <FeaturedCard key={elem.id} {...elem} />
        ))}
      </FeaturedContainer>
    </>
  );
}

const FeaturedCard = (props) => {
  const { imageURL, title, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <StyledCard image={imageURL}>
        <h3>{title.en}</h3>
      </StyledCard>
    </Link>
  );
};
