import React from 'react';
import { Text, Img } from '../Components';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <Img
        src="/assets/profile.jpg"
        alt="Roger Callupe"
        style={{ borderRadius: '50%' }}
      />
      <Text
        content="Hi! I'm Roger Callupe Coronado, a Full Stack Developer in training at RRC Polytech. I enjoy building reusable components and responsive web applications using React and TypeScript."
        size="16px"
      />
    </section>
  );
};

export default About;