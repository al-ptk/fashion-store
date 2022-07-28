import React from 'react';
import { useParams } from 'react-router-dom';

export default function Catalog(props) {
  const params = useParams();
  console.log(params);

  return <div>lul</div>;
}
