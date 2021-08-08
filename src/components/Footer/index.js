import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row' id='brand-text'>
                    <div className='col-md-4'>
                    <a href='https://github.com/MarcoC007'>
                        <label>Github</label>
                        </a> 
                    </div>
                    <div className='col-md-4'>
                        <a href='https://www.linkedin.com/in/marco-estrada-2020/'>
                            <label>Linkedin</label>
                            </a>
                    </div>
                    <div className='col-md-4'>
                        <a href="https://docs.google.com/document/d/1Xp-41aVdd8CrV_3q_ScMFiwcUtUsGJsk9n_EYBlclcg/edit?usp=sharing">
                            <label>Resume</label>
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;