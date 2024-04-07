import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional e-commerce website built with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "ecommerce.jpg"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A social media application allowing users to connect and share content.",
      technologies: ["React", "Express.js", "MongoDB"],
      image: "social_media.jpg"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "An application for managing tasks and projects efficiently.",
      technologies: ["Vue.js", "Firebase"],
      image: "task_management.jpg"
    },
    {
      id: 4,
      title: "Weather App",
      description: "A weather application providing real-time weather forecasts.",
      technologies: ["React", "OpenWeatherMap API"],
      image: "weather_app.jpg"
    }
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
            <img src={require(`../../assets/${project.image}`).default} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.technologies.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
