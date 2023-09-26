import React from 'react';

function Resume() {

    // Resume link
    const resumeLink = 'https://docs.google.com/document/d/1yvz_CQKu5UWZuidpS39T_wg_PGh0Os46N2I7FIBbfN4/edit';

    const proficiencies = [
        'Web Development',
        'JavaScript',
        'React',
    ];

    return (
        <section id="resume">
            <div className="resume-container">
                <h2>Resume</h2>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">Download Resume</a>
                <h3>Proficiencies</h3>
                <ul>
                    {proficiencies.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Resume;