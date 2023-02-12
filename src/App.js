import React from 'react';
import Hero from './Pages/Hero.jsx';
import Profile from './Pages/Profile.jsx';
import FeaturedProjects from './Pages/FeaturedProjects.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import "./sass/App.css";
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Profile/>
      <FeaturedProjects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;