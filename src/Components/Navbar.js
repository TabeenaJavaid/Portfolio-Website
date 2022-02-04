import React,{useState}from 'react';
import 'bootstrap';
import {NavLink} from 'react-router-dom'
import './Navbar.css'



const Navbar =()=>{
  const [navbarVisible, setNavbarVisible] = useState(false)



  const toggleNavBar = () => {
      setNavbarVisible(prev => !prev);
      console.log('toggling')

  }

  const navBarClasses = navbarVisible ? ['collapse', 'navbar-collapse', 'show'] : ['collapse', 'navbar-collapse']
  return (
      <div className="full" >
          <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
              <a style={{ color: 'grey', fontSize: '16px' }} className="navbar-brand" href="/">Tabeena Javaid</a>
              <button onClick={toggleNavBar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className={navBarClasses.join(' ')} id="navbarNavAltMarkup">
                  <div className="navbar-nav" onClick={toggleNavBar}>
                      <NavLink href='#home'  to='/' className="nav-item nav-link" > <i className="fa-solid fa-house"></i> Home <span className="sr-only"></span></NavLink>
                      <NavLink href='#projects' to='/projects' className="nav-item nav-link" ><i className="fa-solid fa-diagram-project"></i> Projects </NavLink>
                      <NavLink href='#articles' to='/articles' className="nav-item nav-link" > <i className="fa-solid fa-newspaper"></i> Articles</NavLink>
                      <NavLink href='contact' to='/contact' className="nav-item nav-link" > <i className="fa-solid fa-address-card"></i> Contact Me</NavLink>
                  </div>
              </div>
          </nav >
      </div >
  )
}

export default Navbar;

