import React from 'react'
import './About Me.css'

function AboutMe() {
  return (
    <section id='articles'>
    <div className="container">
    <h2 style={{color:'#1d3557',textTransform:'uppercase',fontSize:'24px'}} className='text-center'>About Me</h2>
    <hr/>
   <div className="row">
  <div className=" col-12" style={{marginTop:'20px'}}>
  <p className='about-para' >Hi! I am Tabeena from kashmir, India. I am a front-end web developer. I am well versed with JavaScript, React and Redux.
       I am passionate about designing and developing responsive user interfaces and creating reusable, clean, testable, maintainable and functional code is my highest priority.<br/>
   </p>  
   
      <span className='skills'>KEY SKILLS-</span> 
      <ul >
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Semantic-UI</li>
          <li>Material-UI</li>
          <li>React</li>
          <li>React-Router</li>
          <li>React-Toastify</li>
          <li>Redux</li>
          <li>React-Redux</li>
          <li>Responsive Web Design</li>
      </ul>
    
  </div>
 </div>
</div>
</section>






  
     
              
  
 
    )
}

export default AboutMe