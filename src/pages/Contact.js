import React from 'react';
import {Form} from 'react-bootstrap';
import '../components/FormCss/styles.css';

function ContactForm() {
    return (
    <div className="contactForm">
        <h1>Contact</h1>
        <form>
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
        </form>
        </div>
    )
}

export default ContactForm;