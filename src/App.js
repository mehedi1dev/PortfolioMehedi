import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';

import { BackToTop } from './Components/BackToTop';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <About />

      <BackToTop />
    </div>
  );
}

export default App;
