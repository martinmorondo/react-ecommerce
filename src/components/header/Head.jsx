import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Head = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className='header'>                
                    <div className='nav-link'>
                        <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f-flex capitalize'} onClick={() => setMobileMenu(false)}>
                            <li>
                               <Link to = '/'>home</Link> 
                            </li>                         
                            <li>
                               <Link to = '/cart'>track my order</Link> 
                            </li>
                            <li>
                               <Link to = '/contact'>contact</Link> 
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? 
                                <i className='fas fa-times close home-btn'></i> :
                                <i className="fa-solid fa-bars open"></i>
                            }
                        </button>
                        
                    </div>
                
            </header>
        </>
    );
}

export default Head;
