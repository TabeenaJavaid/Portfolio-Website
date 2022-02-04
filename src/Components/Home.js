import React from 'react';
import './Home.css'

function Home() {
  return (
  <section id='home' style={{height:'100vh',width:'100%',alignItems:'center'}}>
    <div className='center'>
      <h4>Hello, my name is</h4>
      <h1>Tabeena Javaid</h1>
      <h3>And I'm a <span>Front-end/(UI) Developer</span></h3>
      <hr/>
      <h4 className='social-h4'> Get in touch with me  </h4>
                <div className='social'>
                    <a style={{ color: '#1DA1F2' }} target='_blank' rel="noreferrer" href="https://twitter.com/@TabeenaJavaid09"><i className="fab fa-twitter icon"></i></ a>
                    <a style={{ color: '#f94144' }} target='_blank' rel="noreferrer" href="https://www.instagram.com/tabeenajavaid"><i className="fab fa-instagram"></i></a>
                    <a style={{ color: '#277da1' }} target='_blank' rel="noreferrer" href="https://github.com/TabeenaJavaid"><i className="fab fa-github"></i></a>


                </div>
    </div>
  </section>
    )
}

export default Home;
