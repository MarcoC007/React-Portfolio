import React, {Container, Col, Row} from 'react-bootstrap';
// import { AnimateOnChange } from 'react-animation';
import Photo from '../images/mainimage.jpg';

function About() {
    return (
        <Container className="about-content">
            <header>
                <h2 className="about-header">About Me</h2>
            </header>
            
            <Row id="row" className="about-column">
        
            <Col  lg={{order: 4}} className="about-image">
            
            <img src={Photo} className="img-thumbnail" thumbnail alt="main-pic"/>
           
            </Col>
        
        
        <Col  lg={{order: 8}}>
            <div className="about-paragraph">
                <p className="paragraph1">
                    My name is Marco, I am a Front End Developer who loves learning new things, I try always to do my best,
                    in the future I would like to learn about new technologies.
                    </p>
                <p className="paragraph2">
                   I am challenger who doesn't give up easily, I have many habits like playing videogames, reading books and drawing.
                   I am fluent in Spanish and English, learn new languages is my passion and I enjoy doing it.
               </p>
                
           </div>
        </Col>
        </Row>
        <Row>
            <Col lg={{order: 8}} className="skills">
                <h2>Skills:</h2>
                <ul>
                    <li>
                        HTML5
                    </li>
                    <li>
                        CSS3
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        React
                    </li>
                </ul>
            </Col>
        </Row>
        </Container>
    )
}

export default About;