import React from 'react-bootstrap';

function PortfolioCard(props) {
    return (
        <div className='card'>
            <a href={props.link}>
                <img className='card-img-top' height="360px" width="360px" src={props.src} alt={props.alt}/>
            </a>
            <div className='card-body'>
                <div className="card-title" ></div>
                <h2 style={{ color:'white', backgroundColor:'black', height: '100%', paddingBottom: '7%'}}>{props.title}</h2>
            </div>
        </div>
    )
}

export default PortfolioCard;