import React from 'react';

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
      <div id='Home' className='gapOne'></div>
        <Navbar />
      <div className='sections'>  
        <div className='gapR'></div>
        <Home />
        <div id='About' className='gap bgT'></div>
        <About />
        <div id='Skill' className='gap bg'></div>
        <Skill />
        <div id='Education' className='gap bg'></div>
        <Education />
        <div id='Contact' className='gap bg'></div>
        <Contact />
        <div style={{'height':'75px', 'backgroundColor':'transparent'}}></div>
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
