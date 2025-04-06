import React from 'react';
import NavBar from './Components/NavBar';
import About from './Sections/About';
import Work from './Sections/Work';
import Skills from './Sections/Skills';
import Resources from './Sections/Resources';
import Setup from './Sections/Setup';
import './App.css';
import {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Img,
  Label,
  RadioButton,
  Table,
  Text,
} from './Components';

function App() {
  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Component Gallery – Roger Callupe</h1>
      <div className="App">
      <NavBar />
      
      <section id="about" style={{ padding: '4rem 2rem', scrollMarginTop: '120px' }}>
        <About />
      </section>

      <section id="work" style={{ padding: '4rem 2rem', scrollMarginTop: '10px' }}>
        <Work />
      </section>

      <section id="skills" style={{ padding: '4rem 2rem', scrollMarginTop: '120px' }}>
        <Skills />
      </section>

      <section id="resources" style={{ padding: '4rem 2rem', scrollMarginTop: '10px' }}>
        <Resources />
      </section>

      <section id="setup" style={{ padding: '4rem 2rem', scrollMarginTop: '10px' }}>
        <Setup />
      </section>
    </div>

      <h2>🟦 Button</h2>
      <Button label="Click Me" onClick={() => alert('Clicked!')} />

      <h2>🧾 Card</h2>
      <Card
      title="Project Card"
      description="Short description here"
      content="This is the content section of the card."
      backgroundColor="#f8f8f8"
      textColor="#333"
      disabled={false}
      >
      <button>Click Me</button>
      </Card>

      <h2>🔽 Dropdown</h2>
      <Dropdown
        options={[
          { label: 'HTML', value: 'html' },
          { label: 'CSS', value: 'css' },
          { label: 'JavaScript', value: 'js' },
        ]}
        defaultValue=""
        onChange={(e) => console.log('Selected:', e.target.value)}
        backgroundColor="#f0f0f0"
        textColor="#333"
        disabled={false}
      />

      <h2>🖼️ HeroImage</h2>
      <HeroImage
        src="https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg"
        alt="Red River College Banner"
      />

      <h2>🖼️ Img</h2>
      <Img
        src="https://www.rrc.ca/marcom/wp-content/uploads/sites/1/sites/99/2022/08/RRC-NDC_Exterior-0557-web_banner-1536x614.jpg"
        alt="Red River College"
      />

      <h2>Label</h2>
      <Label text="This is a label" />

      <h2>🔘 RadioButton</h2>
      <RadioButton
        name="test-radio"
        value="option1"
        label="Option 1"
        checked={false}
        onChange={() => console.log('Option 1 selected')}
      />

      <h2> Table</h2>
      <Table
        headers={['Product', 'Price', 'Quantity']}
        rows={[
              ['Laptop', '$1200', 10],
              ['Mouse', '$25', 50],
              ]}
        backgroundColor="#f9f9f9"
        textColor="#333"
        headerBackgroundColor="#222"
        headerTextColor="#fff"
      />

      <h2>🔤 Text</h2>
      <Text content="This is a text component." size="16px" />
    </div>

    
  );
}



export default App;
