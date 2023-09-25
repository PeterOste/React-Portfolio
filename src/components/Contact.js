import React, { useState } from 'react';

function Contact() {
    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Check if any field is empty
        if (!name || !email || !message) {
            setIsFieldEmpty(true);
            return;
        }

        // Check if the email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setIsInvalidEmail(true);
            return;
        }

        // Reset error states
        setIsFieldEmpty(false);
        setIsInvalidEmail(false);
        
        // Process the form data here

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
} 

export default Contact;
