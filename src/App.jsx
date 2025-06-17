import LoadingSpinner from './components/LoadingSpinner.jsx';
import Starfield from './components/Starfield.jsx';
import Hero from './Pages/Hero.jsx';
import Profile from './Pages/Profile.jsx';
import FeaturedProjects from './Pages/FeaturedProjects.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Contact from './Pages/Contact.jsx';
import "./sass/App.css";

function App() {
    return (
        <div className="App">
            <LoadingSpinner />
            <Hero />
            <Starfield />
            <Profile />
            <FeaturedProjects />
            <AboutMe />
            <Contact />
        </div>
    );
}

export default App;