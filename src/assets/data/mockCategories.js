const mockCategories = [
  { title: 'category1', path: 'catalog/?filter=category1' },
  { title: 'category2', path: 'catalog/?filter=category2' },
  { title: 'category3', path: 'catalog/?filter=category3' },
  { title: 'category4', path: 'catalog/?filter=category4' },
  { title: 'category5', path: 'catalog/?filter=category5' },
  { title: 'category6', path: 'catalog/?filter=category6' },
];

export function getCategories() {
  return mockCategories;
}
