import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skill } from './Components/Skill';
import { Education } from './Components/Education';
import { Contact } from './Components/Contact';

import { BackToTop } from './Components/BackToTop';

function App() {
  return (
    <div className='container'>
      <div id='Home' style={{'height':'50px'}}></div>
        <Navbar />
      <div className='sections'>
        <Home />
        <div id='About' style={{'height':'50px'}}></div>
        <About />
        <div id='Skill' style={{'height':'50px'}}></div>
        <Skill />
        <div id='Education' style={{'height':'50px'}}></div>
        <Education />
        <div id='Contact' style={{'height':'50px'}}></div>
        <Contact />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
