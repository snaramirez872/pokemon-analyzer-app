import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className='Home'>
            <div className='home-links'>
                <a href='#'>Pokemon Name</a>
                <Link to='/types'>
                    <p>Pokemon Types</p>
                </Link>
            </div>

        </div>
    );
}

export default Home;
