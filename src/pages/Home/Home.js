import Featured from './Featured';
import HeroIntro from './HeroIntro';
import { getFeatured } from '../../assets/data/mockProducts';
import { useEffect, useState } from 'react';
import Categories from './Categories';
import { getCategories } from '../../assets/data/mockCategories';

export function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setFeatured(JSON.parse(getFeatured()));
  }, []);

  return (
    <main>
      <HeroIntro />
      <Featured productList={featured} />
      <Categories categoriesList={getCategories()} />
    </main>
  );
}
