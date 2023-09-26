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
              Hello, I'm a web developer that is passionate about creating web applications and learning new technologies.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;