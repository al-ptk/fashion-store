import Featured from './Featured';
import HeroIntro from './HeroIntro';
import { getFeatured } from '../../assets/data/mockProducts';
import { useEffect, useState } from 'react';

export function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setFeatured(JSON.parse(getFeatured()));
  }, []);

  return (
    <main>
      <HeroIntro />
      <Featured productList={featured} />
    </main>
  );
}
