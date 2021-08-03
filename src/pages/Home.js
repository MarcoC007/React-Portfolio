import React from 'react';
import {AnimateOnChange} from 'react-animation';
import '../App.css';

function Home() {
    return (

        <AnimateOnChange>
            <div className="row">
                <div className="col-md-6">
        <div className="home">
            <h1>Welcome</h1>
        </div>
        </div>
        <div className="col-md-6">
        <div id="main-btn">
            <button className="main-btn" type="submit">
                <a href="#/about">
                    <label>
                        Enter
                    </label>
                </a>
            </button>
            </div>
            </div>
            </div>
        
        </AnimateOnChange>
    )
}

export default Home;