import Featured from './Featured';
import HeroIntro from './HeroIntro';
import { getFeatured } from '../../assets/data/mockProducts';

export function Home() {
  return (
    <main>
      <HeroIntro />
      <Featured productList={getFeatured()} />
    </main>
  );
}
