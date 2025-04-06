import React from 'react';
import { Text, Table } from '../Components';

const Setup = () => {
  const headers = ['Tool', 'Configuration'];
  const rows = [
    ['Editor', 'VS Code - https://code.visualstudio.com/docs/getstarted/getting-started'],
    ['Theme', 'One Dark Pro'],
    ['Font', 'Fira Code (ligatures enabled)'],
    ['Terminal', 'Windows Terminal + PowerShell - https://code.visualstudio.com/docs/terminal/basics'],
    ['Shell Customization', 'https://surl.li/mfrfys'],
    ['Extensions', 'Prettier, ESLint, GitLens, Docker, Live Server'],
  ];

  return (
    <section>
      <h2>🧑‍💻 Developer Setup</h2>
      <Text
        content="Here is a quick overview of the tools and settings I use for daily development:"
        size="16px"
      />
      <div style={{ marginTop: '2rem' }}>
        <Table headers={headers} rows={rows} />
      </div>
    </section>
  );
};

export default Setup;