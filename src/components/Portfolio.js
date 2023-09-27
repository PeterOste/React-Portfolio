import React from 'react';

function Portfolio() {
  // Define an array of project data
  const projects = [
    {
        title: 'Weather Dashboard', // Title
        imageUrl: 'WeatherDashboard.jpg', // Image URL for your project
        deployedUrl: 'https://peteroste.github.io/Weather-Dashboard/', // Deployed application URL
        githubUrl: 'https://github.com/PeterOste/Weather-Dashboard', // GitHub repository URL
    },
    {
        title: 'Note Taker',
        imageUrl: 'NoteTaker.PNG',
        deployedUrl: 'https://note-taker-8-4-2023-5e167a016793.herokuapp.com/',
        githubUrl: 'https://github.com/PeterOste/Note-Taker',
    },
    {
        title: 'Work Day Scheduler',
        imageUrl: 'WorkDayScheduler.png',
        deployedUrl: 'https://peteroste.github.io/Work-Day-Scheduler/',
        githubUrl: 'https://github.com/PeterOste/Work-Day-Scheduler',
    },
    {
        title: 'Project 4',
        // imageUrl: 'project2.jpg',
        // deployedUrl: 'https://example.com/project2',
        // githubUrl: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Project 5',
        // imageUrl: 'project2.jpg',
        // deployedUrl: 'https://example.com/project2',
        // githubUrl: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Project 6',
        // imageUrl: 'project2.jpg',
        // deployedUrl: 'https://example.com/project2',
        // githubUrl: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <section id="portfolio" className="route-container">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-items">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <div className="portfolio-links">
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;