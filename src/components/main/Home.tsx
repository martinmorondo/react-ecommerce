import SlideCard from './SlideCard';

const Home = () => {
  return (
    <section
      aria-labelledby="featured-offers-title"
      className="w-full pb-8 sm:pb-10 lg:pb-12"
    >
      <h1
        id="featured-offers-title"
        className="sr-only"
      >
        Ofertas destacadas
      </h1>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SlideCard />
      </div>
    </section>
  );
};

export default Home;