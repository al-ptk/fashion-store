import React from 'react';
import { getFeatured } from '../../../assets/data/mockProducts';

export function Featured() {
  return <div>{getFeatured()}</div>;
}
