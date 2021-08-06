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

            <p className="paragraph">
                My name is Marco Estrada and I am 27 years old, I have grown up and raised in Guatemala, I moved to New
                York 4 years ago and for 2 years I have been living in Morrisville, PA. I am currently working in a
                restaurant and my hobbies are watching sports games, reading books, drawing and especially learning about
                programming and that is why I have started to follow the coding path.
            </p>
        
        </Col>
        </Row>
        </Container>
    )
}

export default About;