import React from 'react';
import Heading2 from '../../../components/Heading2';
import { StyledCategory } from './Categories.styled';

function Categories({ categoriesList }) {
  return (
    <>
      <Heading2>Categories:</Heading2>
      <div>
        {categoriesList.map((category, index) => (
          // StyledCategory extends Link from react-router
          <StyledCategory key={index} to={category.path}>
            {category.title}
          </StyledCategory>
        ))}
      </div>
    </>
  );
}

export { Categories };
