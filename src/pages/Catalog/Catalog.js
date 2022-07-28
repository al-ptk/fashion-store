import React from 'react';
import { useLocation } from 'react-router-dom';
import Heading2 from '../../components/Heading2';

export default function Catalog(props) {
  const location = useLocation();
  const filterTitle = location.search.match(/=(.*)/)[1];

  return (
    <div>
      <Heading2>Search for: {filterTitle}</Heading2>
    </div>
  );
}
