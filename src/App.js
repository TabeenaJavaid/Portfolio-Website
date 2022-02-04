import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import {Routes,Route} from 'react-router-dom';
import Articles from './Components/Articles';

function App() {
  return (
<>
<Navbar/>
<Routes>
     <Route  path='/' element={<Home />} />;
     <Route  path='/projects' element={<Projects />} />;
     <Route  path='/articles' element={<Articles />} />;
     <Route  path='/contact' element={<Contacts />} />;
</Routes>

</>

  )
}

export default App;
