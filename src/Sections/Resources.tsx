import React from 'react';
import { Card } from '../Components';

const Resources = () => {
  const resources = [
    {
      title: 'React Documentation',
      description: 'Official React documentation and guides.',
      content: 'https://react.dev/',
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive reference for HTML, CSS, and JavaScript.',
      content: 'https://developer.mozilla.org/',
    },
    {
      title: 'GitHub',
      description: 'My GitHub profile where I publish personal projects.',
      content: 'https://github.com/rcallupecoronado',
    },
  ];

  return (
    <section>
      <h2>📚 Resources</h2>
      {resources.map((res, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <Card
            title={res.title}
            description={res.description}
            content={
              <a href={res.content} target="_blank" rel="noopener noreferrer">
                {res.content}
              </a>
            }
          />
        </div>
      ))}
    </section>
  );
};

export default Resources;