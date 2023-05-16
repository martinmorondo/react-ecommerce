import React from 'react';
import './Home.css';
import Categories from './Categories';
import SliderHome from './Slider';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container d-flex'>
                    <Categories />
                    <SliderHome />
                </div>
            </section>
        </>
    );
}

export default Home;
