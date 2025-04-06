import React from 'react';
import { Text, Table } from '../Components';

const Setup = () => {
  const headers = ['Tool', 'Configuration'];
  const rows = [
    [
      <>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="VS Code"
          style={{ width: '24px', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />
        VS Code
      </>,
      <a
        href="https://code.visualstudio.com/docs/getstarted/getting-started"
        target="_blank"
        rel="noopener noreferrer"
      >
        VS Code Docs
      </a>,
    ],
    ['Theme', 'One Dark Pro'],
    ['Font', 'Fira Code (ligatures enabled)'],
    [
      <>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
          alt="Terminal"
          style={{ width: '24px', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />
        Windows Terminal + PowerShell
      </>,
      <a
        href="https://code.visualstudio.com/docs/terminal/basics"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terminal Setup
      </a>,
    ],
    [
      'Shell Customization',
      <a
        href="https://surl.li/mfrfys"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shell Script
      </a>,
    ],
    [
      <>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="Docker"
          style={{ width: '24px', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />
        Docker, Prettier, ESLint, GitLens, Live Server
      </>,
      'Installed via VS Code Marketplace',
    ],
  ];

  return (
    <section>
      <h2> Developer Setup</h2>
      <Text
        content="Here is a quick overview of the tools and settings I use for daily development:"
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

export default Setup;