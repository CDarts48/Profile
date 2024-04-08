import React from 'react';
import './Portfolio.css'; // Import the CSS file

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
    {
      id: 4,
      title: "Tech Blog",
      description: "A blog for tech enthusiasts to share and discuss tech-related topics.",
      technologies: ["Node.js", "Express.js", "Handlebars"],
      link: "https://github.com/CDarts48/TechBlog"
    },
    {
      id: 5,
      title: "README Generator",
      description: "A Node.js application to generate professional README files for GitHub projects.",
      technologies: ["Node.js"],
      link: "https://github.com/CDarts48/README-generator"
    },
    {
      id: 6,
      title: "Logo Maker",
      description: "A simple application to create custom logos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/CDarts48/Logo-Maker"
    },
  ];
  
  return (
    <section>
      <h2>Portfolio</h2>
      <p>
        This is a showcase of my projects. Stay tuned for more updates!
      </p>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="grid-item">
            <img src={`https://source.unsplash.com/random/200x200?nature,${project.title}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies used: {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;