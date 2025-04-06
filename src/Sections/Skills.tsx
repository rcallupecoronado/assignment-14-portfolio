import React from 'react';
import { Table, Text } from '../Components';

const Skills = () => {
  const headers = ['Category', 'Technologies'];
  const rows = [
    ['Frontend', 'React, TypeScript, HTML, CSS, Bulma'],
    ['Backend', 'Ruby on Rails, Node.js, Express'],
    ['Database', 'SQLite, PostgreSQL'],
    ['Tools', 'Git, Docker, VS Code, Husky, Storybook'],
    ['Testing', 'Jest, React Testing Library'],
  ];

  return (
    <section>
      <h2> Skills</h2>
      <Text
        content="These are the tools and technologies I use regularly to build full stack applications:"
        size="16px"
      />
      <div
        style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Table headers={headers} rows={rows} />
      </div>
    </section>
  );
};

export default Skills;