import React from 'react';
import { Card } from '../Components';

const Resources = () => {
  const resources = [
    {
      title: 'React Documentation',
      description: 'Official React documentation and guides.',
      content: 'https://react.dev/',
      image: '/assets/placeholder.jpg',
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive reference for HTML, CSS, and JavaScript.',
      content: 'https://developer.mozilla.org/',
      image: '/assets/placeholder.jpg',
    },
    {
      title: 'GitHub',
      description: 'My GitHub profile where I publish personal projects.',
      content: 'https://github.com/rcallupecoronado',
      image: '/assets/placeholder.jpg',
    },
  ];

  return (
    <section>
      <h2>📚 Resources</h2>
      <p style={{ fontSize: '16px', marginBottom: '2rem' }}>
        Here are some helpful resources and references I frequently use in development.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {resources.map((res, index) => (
          <div key={index} style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <Card
              title={res.title}
              description={res.description}
              content={
                <>
                  <img
                    src={res.image}
                    alt={res.title}
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
                  />
                  <a href={res.content} target="_blank" rel="noopener noreferrer">
                    {res.content}
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

export default Resources;