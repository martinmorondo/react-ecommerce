import React from 'react';
import logo from '../../assets/img/phone-logo.png';

const Search = () => {
    return (
        <>
            <section className='search'>
                <div className='container c-flex'>
                    <div className='logo width'>
                        <img src = {logo} alt = ''  className='logo'/>
                    </div>

                    <div className='search-box f-flex'></div>
                </div>
            </section>
        </>
    );
}

export default Search;
