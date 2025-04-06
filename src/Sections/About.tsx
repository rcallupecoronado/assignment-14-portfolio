import React from 'react';
import { Text, Img } from '../Components';

const About = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
        <Img
          src="/assets/profile.jpg"
          alt="Roger Callupe"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }}
        />
      </div>
      <div style={{ flex: '2 1 400px', maxWidth: '800px' }}>
        <h2> About</h2>
        <Text
          content={`Hi, I'm Roger Callupe — a Full Stack Web Developer with a unique background in audiovisual production.

My journey began in the world of multimedia, where I spent over 5 years crafting live experiences with sound, video, and lighting. That hands-on creativity led me to discover the power of code — and I haven’t looked back.

Today, I specialize in building full-stack applications using technologies like React, Python, SQL, and AWS. I’m passionate about crafting user-friendly, visually engaging, and technically sound digital experiences — blending my background in audio/video with clean code and thoughtful design.

Whether I’m coding a rental platform, deploying a Dockerized app, or integrating real-time streaming, my goal is the same: to create things that work beautifully and feel intuitive.

Currently, I’m completing my Full Stack Web Development diploma at Red River College, and I’m always exploring new ways to combine creativity and technology.

Let’s build something meaningful.`}
          size="16px"
        />
      </div>
    </section>
  );
};

export default About;