import brownJacket from '../images/products/BrownJacket.webp';
import classyDress from '../images/products/Classy Dress.webp';
import colorCombo from '../images/products/Colorful Combo.webp';

const catalog = [
  {
    id: 1,
    title: {
      en: 'Cool Jacket',
      pt: 'Jaqueta Descolada',
    },
    imageURL: brownJacket,
    price: '$89,99',
    sizes: {
      en: ['S', 'M', 'L'],
      pt: ['P', 'M', 'G'],
    },
    colors: ['brown', 'black'],
  },
  {
    id: 2,
    title: {
      en: 'Classy Dress',
      pt: 'Vestido Elegante',
    },
    imageURL: classyDress,
    price: '$89,99',
    sizes: {
      en: ['S', 'M', 'L'],
      pt: ['P', 'M', 'G'],
    },
    colors: ['black', 'grey', 'beige'],
  },
  {
    id: 3,
    title: {
      en: 'Colorful Combo',
      pt: 'Conjundo Colorido',
    },
    imageURL: colorCombo,
    price: '$89,99',
    sizes: {
      en: ['S', 'M'],
      pt: ['P', 'M'],
    },
    colors: ['yellow', 'blue', 'red'],
  },
  {
    id: 4,
    title: {
      en: 'Some Other Product',
      pt: 'Conjundo Colorido',
    },
    imageURL: colorCombo,
    price: '$89,99',
    sizes: {
      en: ['S', 'M'],
      pt: ['P', 'M'],
    },
    colors: ['yellow', 'blue', 'red'],
  },
];

export function getFeatured() {
  const featuredIDs = [1, 2, 3];
  return JSON.stringify(
    // Keep only the products whose id is featured.
    // This may change to tag or something. Idk yet.
    catalog.filter((product) => featuredIDs.includes(product.id))
  );
}
