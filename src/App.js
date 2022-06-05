import React from 'react';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App(props) {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;