import React from 'react';

function AboutMe() {
    return (
      <section id="about-me">
        <div className="about-me-container">
          <div className="about-me-image">
            <img
              src="/Avatar.png"
              alt="Peter's Avatar"
              width="300"
              height="250"
            />
          </div>
          <div className="about-me-content">
            <h2>About Me</h2>
            <p>
            Hello, I'm Peter, and I've recently ventured into the field of web development. I'm currently enrolled in a full-stack coding bootcamp. My focus is on creating web applications and staying updated with emerging technologies.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;