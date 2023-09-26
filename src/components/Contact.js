import React, { useState } from 'react';

function Contact() {
    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFieldEmpty, setIsFieldEmpty] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [blurEvents, setBlurEvents] = useState([]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Check if any field is empty
        if (!name || !email || !message) {
            setIsFieldEmpty((prevState) => ({
                ...prevState,
                name: !name,
                email: !email,
                message: !message,
            }));
            return;
        }

        // Check if the email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setIsInvalidEmail(true);
            return;
        }

        // Reset error states
        setIsFieldEmpty({
            name: false,
            email: false,
            message: false,
        });
        setIsInvalidEmail(false);
        
        // Process the form data here

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');

        handleBlur('Form submitted');
    };


    const handleBlur = (field) => {
        if (field === 'Form submitted') {
          const newBlurEvents = [...blurEvents, 'Form submitted'];
          setBlurEvents(newBlurEvents);
        } else if (field === 'name') {
          if (!name.trim()) {
            const newBlurEvents = [...blurEvents, 'Name is required'];
            setBlurEvents(newBlurEvents);
          }
        } else if (field === 'email') {
          if (!email.trim()) {
            const newBlurEvents = [...blurEvents, 'Email is required'];
            setBlurEvents(newBlurEvents);
          }
        }
    };

    return (
        <section id="contact" className="route-container">
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
                            onBlur={() => handleBlur('name')}
                            required
                            className={isFieldEmpty.email || isInvalidEmail ? 'error' : ''}
                        />
                        {isFieldEmpty.name && <p className="error-message">Name is required.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => handleBlur('email')}
                            required
                        />
                        {isFieldEmpty.email && <p className="error-message">Email is required.</p>}
                        {isInvalidEmail && <p className="error-message">Please enter a valid email.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className={isFieldEmpty.message ? 'error' : ''}
                        />
                        {isFieldEmpty.message && <p className="error-message">Message is required.</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <ul className="blur-events">
                    {blurEvents.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
} 

export default Contact;
