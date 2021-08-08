import React from 'react';
import './style.css';

function Nav() {
    return (
    <div className='container'>
        <nav className='row'>
            <div className="col-md-4" id="nav">
                <h3 className="nav-text">My Portfolio</h3>
            </div>

            <div className="col-md-8" id="nav-links">
                <div className="buttons">
                    <a href="#/">
                        <button className='btn-no-style'>
                            Home
                        </button>
                    </a>
                    <a href='#/about'>
                        <button className="btn-no-style">
                            About
                        </button>
                    </a>
                    <a href='#/portfolio'>
                        <button className='btn-no-style'>
                            Portfolio
                        </button>
                    </a>
                    <a href='#/contact'>
                        <button className='btn-no-style'>
                            Contact
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Nav;