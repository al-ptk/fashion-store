const mockCategories = [
  { title: 'catgory1', path: 'catalog/?filter=category1' },
  { title: 'catgory2', path: 'catalog/?filter=category2' },
  { title: 'catgory3', path: 'catalog/?filter=category3' },
  { title: 'catgory4', path: 'catalog/?filter=category4' },
  { title: 'catgory5', path: 'catalog/?filter=category5' },
  { title: 'catgory6', path: 'catalog/?filter=category6' },
];

export function getCategories() {
  return mockCategories;
}
