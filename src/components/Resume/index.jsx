// src/components/Resume/index.jsx
import React from 'react';

const Resume = () => {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"];

  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my <a href="/path_to_your_resume.pdf" download>resume</a>.
      </p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;