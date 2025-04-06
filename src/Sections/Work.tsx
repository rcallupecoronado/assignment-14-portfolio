import React from 'react';
import { Card } from '../Components';

const Work = () => {
  const projects = [
    {
      title: 'Component Library UI',
      description: 'Develop and Reusable UI component system built with React, TypeScript, and Styled.',
      image: '/assets/placeholder.jpg',
      techList: ['React', 'TypeScript', 'Styled Components', 'Docker', 'Husky'],
    },
    {
      title: 'Pro Photo Gear Store',
      description: 'E-commerce site for pro photography gear built with Rails and ActiveAdmin.',
      image: '/assets/placeholder.jpg',
      techList: ['Ruby on Rails', 'ActiveAdmin', 'SQLite', 'Bulma', 'Kaminari'],
    },
    {
      title: 'AV Rental Platform',
      description: 'Web-based rental system for audio/video equipment.',
      image: '/assets/placeholder.jpg',
      techList: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Streaming Platform Prototype',
      description: 'Prototype for real-time AV streaming and distribution.',
      image: '/assets/placeholder.jpg',
      techList: ['React', 'WebRTC', 'Node.js', 'Socket.io'],
    },
  ];

  return (
    <section>
      <h2> Work / Projects</h2>
      <p style={{ fontSize: '16px', marginBottom: '2rem' }}>
        A selection of academic and personal projects that reflect my full-stack development journey.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 300px',
              maxWidth: '500px',
            }}
          >
            <Card
              title={project.title}
              description={project.description}
              content={
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '2rem',
                    }}
                  />
                  <p>
                    <strong>Technologies:</strong> {project.techList.join(', ')}
                  </p>
                  <a
                    href="https://github.com/rcallupecoronado"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;