import React from 'react';
import PortfolioCard from '../components/Card/index';

function Portfolio() {
    return (
        <div ClassName='row' id='portfolio-content'>
        <div className="card-group">
        <div className="row">
         
         <div className="column">

         <div className="row" id="row">

        <div className="column">     
        <PortfolioCard
        className="portfolio-img"
        link="https://marcoc007.github.io/Daily-Planner/"
        src="https://user-images.githubusercontent.com/72709524/109371584-9f0e0380-7873-11eb-9fb6-28581b628450.png"
        alt="daily-planer"
        title="Daily Planner"
        />
        </div>

        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://chorvick.github.io/dogvscat/index.html"
        src="https://user-images.githubusercontent.com/72709524/109371612-bea52c00-7873-11eb-9761-2a7d96db09e4.png"
        alt="catvsdog"
        title="Cat vs Dog"
        />
        </div>
        </div>
    
        <div className="row" id="row">
            <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://marcoc007.github.io/Password-Generator/"
        src="https://user-images.githubusercontent.com/72709524/109371637-d4b2ec80-7873-11eb-919e-e20e54adcb34.png" 
        alt="passwordgenerator"
        title="Password Generator"
        />
        </div>

        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://note2000-app.herokuapp.com/notes"
        src="https://user-images.githubusercontent.com/72709524/115158515-8395cc80-a05c-11eb-832d-d0c7d9cf66e4.png"
        alt="notetaker"
        title="Note Taker App"
        />
        </div>
        </div>

        <div className="row" id="row">
        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://marcoc007.github.io/API-Weather/"
        src="https://user-images.githubusercontent.com/72709524/115159996-e343a600-a063-11eb-818f-2f9cca97475f.png"
        alt="weatherapp"
        title="Weather App"
        />
        </div>

        <div className="column" >
        <PortfolioCard
        className="portfolio-img"
        link="https://github.com/MarcoC007/OOP-Team-Profile-Generator"
        src="https://user-images.githubusercontent.com/72709524/115159996-e343a600-a063-11eb-818f-2f9cca97475f.png"
        alt="teamprofilegenerator"
        title="Team Profile Generator"
        />
        </div>
        </div>

        </div>
        </div>
        </div>
        </div>
    )
}

export default Portfolio;