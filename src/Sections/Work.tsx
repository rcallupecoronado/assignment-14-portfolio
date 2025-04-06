import React from 'react';
import { Card } from '../Components';

const Work = () => {
  const projects = [
    {
      title: 'Component Library',
      description: 'A custom UI library built with React, TypeScript, and Styled Components.',
      content: 'Includes Docker deployment, automated tests, and a pre-commit hook using Husky.',
    },
    {
      title: 'Pro Photo Gear Store',
      description: 'E-commerce site for professional photography equipment.',
      content: 'Developed with Ruby on Rails, ActiveAdmin, SQLite, Bulma, and Kaminari pagination.',
    },
  ];

  return (
    <section>
      <h2>💼 Work / Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <Card
            title={project.title}
            description={project.description}
            content={project.content}
          />
        </div>
      ))}
    </section>
  );
};

export default Work;