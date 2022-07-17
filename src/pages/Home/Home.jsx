import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main aria-label="Home page">
      {/* ---------- Hero Intro ----------- */}
      <section aria-labelledby="page-heading">
        <h1 id="page-heading">Brittania</h1>
      </section>

      {/* ---------- Featured ----------- */}
      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading">Featured:</h2>
        {['012', '345', '678'].map((elem) => (
          <Link key={elem} to={`/product/${elem}`} data-testid="featured-link">
            {'featured-' + elem}
          </Link>
        ))}
      </section>

      {/* ---------- Catalog ----------- */}
      <section aria-labelledby="catalog-heading">
        <h2 id="catalog-heading">Catalog:</h2>
        {['01', '23', '45', '67', '89'].map((elem) => (
          <Link
            key={elem}
            to={`/catalog/?filter=${elem}`}
            data-testid="catalog-link"
          >
            {'catalog-' + elem}
          </Link>
        ))}
      </section>

      {/* ---------- Footer ----------- */}
      <footer>
        <section aria-labelledby="about-heading">
          <h3 id="about-heading">About Us</h3>
          {['blog', 'newsletter', 'Institutional'].map((elem, index) => (
            <Link key={index} to="#" data-testid="about-link">
              {elem}
            </Link>
          ))}
        </section>
        <section aria-labelledby="service-heading">
          <h3 id="service-heading">Customer Service</h3>
          {['Our Email', 'Phone Number', 'Whatsapp'].map((elem, index) => (
            <Link key={index} to="#" data-testid="service-link">
              {elem}
            </Link>
          ))}
        </section>
      </footer>
    </main>
  );
};

export default Home;
