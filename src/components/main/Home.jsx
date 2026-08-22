import React from 'react';
import SlideCard from './SlideCard';

const Home = () => {
  return (
    <section
      aria-label="Ofertas destacadas"
      className="w-full pb-6 sm:pb-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SlideCard />
      </div>
    </section>
  );
};

export default Home;