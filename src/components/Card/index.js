import React from 'react-bootstrap';

function PortfolioCard(props) {
    return (
        <div className='card'>
            <a href={props.link}>
                <img className='card-img-top' height="360px" width="360px" src={props.src} alt={props.alt}/>
            </a>
            <div className='card-body'>
                <div className="card-title" style={{fontSize: '20px', color:'white'}}>{props.title}</div>
            </div>
        </div>
    )
}

export default PortfolioCard;