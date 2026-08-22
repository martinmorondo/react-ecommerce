import React from 'react';
import SlideCard from './SlideCard';

const Home: React.FC = () => {
  return (
    <main className="w-full">
      {/* Hero / Ofertas destacadas */}
      <section
        aria-labelledby="featured-offers-title"
        className="w-full pb-8 sm:pb-10 lg:pb-12"
      >
        <h1 id="featured-offers-title" className="sr-only">
          Ofertas destacadas
        </h1>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideCard />
        </div>
      </section>
    </main>
  );
};

export default Home;