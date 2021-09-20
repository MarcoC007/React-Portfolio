import React from 'react';
import {Form} from 'react-bootstrap';
import '../components/FormCss/styles.css';

function ContactForm() {
    return (
    <div className="contactForm">
        <h1>Contact</h1>
        {/* <form>
            <div className="inputGroup">
                <Form.Group size='lg' controlId="userName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                    autoFocus
                    type="text"
                    name="usernames"
                    />
                </Form.Group>
                <Form.Group size='lg' controlId="userEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                name="email"
                />
                </Form.Group>
                <Form.Group size='lg' controlId="message">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="message"
                    />
                </Form.Group>
                
            </div>
        </form> */}
        <div className="row">
            <div className="col-md-6" id="contact-paragraph">
            <p>
               Do you have a question?
            </p>
                    </div>
                    <div className="col-md-6" id="contact-details">
                        <div className="contact">
                            <p>
                                Please do not hesitate to contact me.
                            </p>
                        </div>
                        <div className="telephone">
                            <a href="tel:929-410-0624">
                                    <label>
                                    <p>
                                    tel: 929-410-0624
                                    </p>
                                    </label>
                            </a>
                        </div>
                        <div className="email-contact">
                    <a href="mailto:marco2110estrada@gmail.com">
                        <label>
                        <p>    
                        email: marco2110estrada@gmail.com
                        </p>
                        </label>
                        </a>
                    </div>
                    </div>
        </div>
        </div>
    )
}

export default ContactForm;