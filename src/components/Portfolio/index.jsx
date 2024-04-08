import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional e-commerce website built with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/CDarts48/ecom/tree/main/02-Challenge"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A social media application allowing users to connect and share content.",
      technologies: ["React", "Express.js", "MongoDB"],
      link: "https://github.com/CDarts48/Social-Network-API"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "An application for managing tasks and projects efficiently.",
      technologies: ["Vue.js", "Firebase"],
      link: "https://github.com/CDarts48/Employee_Tracker"
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <p>
        This is a showcase of my projects. Stay tuned for more updates!
      </p>
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.technologies.join(", ")}</p>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;