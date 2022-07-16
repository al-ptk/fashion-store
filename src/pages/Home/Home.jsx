import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main aria-label="Home page">
      <section aria-labelledby="page-header">
        <h1 id="page-header">Brittania</h1>
      </section>

      <section aria-labelledby="featured-header">
        <h2 id="featured-header">Featured:</h2>
        {['012', '345', '678'].map((elem) => (
          <p>
            <Link key={elem} to={`/product/:${elem}`}>
              {elem}
            </Link>
          </p>
        ))}
      </section>

      <section aria-labelledby="catalog-header">
        <h2 id="catalog-header">Catalog:</h2>
        {['01', '23', '45', '67', '89'].map((elem) => (
          <p>
            <Link key={elem} to={`/catalog/?filter=${elem}`}>
              {elem}
            </Link>
          </p>
        ))}
      </section>
    </main>
  );
};

export default Home;
