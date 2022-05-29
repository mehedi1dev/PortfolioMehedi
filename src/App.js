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
      <div className='nav'>
        <Navbar />
      </div>
      <div className='sections'>
        <Home />
        <About />
        <Skill />
        <Education />
        <Contact />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
