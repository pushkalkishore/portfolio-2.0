import React from 'react';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App(props) {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;