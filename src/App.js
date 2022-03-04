import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import {Routes,Route} from 'react-router-dom';
import Articles from './Components/Articles';
import AboutMe from './Components/AboutMe';

function App() {
  return (
<>
<Navbar/>
<Routes>
     <Route  path='/' element={<Home />} />;
     <Route  path='/projects' element={<Projects />} />;
     <Route  path='/articles' element={<Articles />} />;
     <Route  path='/contact' element={<Contacts />} />;
     <Route  path='/about' element={<AboutMe />} />;
</Routes>

</>

  )
}

export default App;
