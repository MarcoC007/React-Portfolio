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
        link="https://marcoc007.github.io/Web-APIs-Code-Quiz/"
        src="https://user-images.githubusercontent.com/72709524/134113194-0a281f59-bece-4ce1-b94a-3073e170682a.png"
        alt="daily-planer"
        title="Code Quiz Game"
        />
        <a href="https://github.com/MarcoC007/Web-APIs-Code-Quiz">
            <label>
            Github:https://github.com/MarcoC007/Web-APIs-Code-Quiz
            </label>
        </a>
        </div>

        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://chorvick.github.io/dogvscat/index.html"
        src="https://user-images.githubusercontent.com/72709524/109371612-bea52c00-7873-11eb-9761-2a7d96db09e4.png"
        alt="catvsdog"
        title="Cat vs Dog"
        />
        <a href="https://github.com/MarcoC007/dogvscat">
            <label>
            Github:https://github.com/MarcoC007/dogvscat
            </label>
        </a>
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
        <a href="https://github.com/MarcoC007/Password-Generator">
            <label>
            Github:https://github.com/MarcoC007/Password-Generator
            </label>
        </a>
        </div>

        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://github.com/MarcoC007/ReadMeApp"
        src="https://user-images.githubusercontent.com/72709524/134113714-ffd7fbc9-481f-4cec-9b82-b69a6c6359e3.png"
        alt="notetaker"
        title="ReadMe App"
        />
        <a href="https://github.com/MarcoC007/ReadMeApp">
            <label>
            Github:https://github.com/MarcoC007/ReadMeApp
            </label>
        </a>
        </div>
        </div>

        <div className="row" id="row">
        <div className="column">
        <PortfolioCard
        className="portfolio-img"
        link="https://marcoc007.github.io/API-Weather/"
        src="https://user-images.githubusercontent.com/72709524/128122422-b16523ec-8c71-44a6-a080-cf5a0c4173e0.png"
        alt="weatherapp"
        title="Weather App"
        />
        <a href="https://github.com/MarcoC007/API-Weather">
            <label>
            Github:https://github.com/MarcoC007/API-Weather
            </label>
        </a>
        </div>

        <div className="column" >
        <PortfolioCard
        className="portfolio-img"
        link="https://github.com/MarcoC007/OOP-Team-Profile-Generator"
        src="https://user-images.githubusercontent.com/72709524/115159996-e343a600-a063-11eb-818f-2f9cca97475f.png"
        alt="teamprofilegenerator"
        title="Team Profile Generator"
        />
        <a href="https://github.com/MarcoC007/OOP-Team-Profile-Generator">
            <label>
            https://github.com/MarcoC007/OOP-Team-Profile-Generator
            </label>
        </a>
        </div>
        </div>

        </div>
        </div>
        </div>
        </div>
    )
}

export default Portfolio;