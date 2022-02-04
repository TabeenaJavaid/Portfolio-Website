import React from 'react';
import './Articles.css'

function Articles() {
  return (
    <section id='articles'>
      <div className="container">
      <h2 style={{color:'#1d3557',textTransform:'uppercase',fontSize:'24px'}} className='text-center'>Articles</h2>
      <hr/>
     <div className="row">
    <div className="col-lg-5 col-md-12" style={{backgroundColor:'#619b8a'}}>
    <h2>Why Code?</h2>
    <hr/>
    <p style={{color:'#ffe8d6'}}>There's no denying that technology now dominates a huge amount of different industries. Being computer illiterate just wont cut it any more in the world of work. And learning to code seems to be the buzzword at the moment. And everyone from Bill Gates to Obama is encouraging young people to give it a go. Coding is the fundamental skill for jobs such as software development. There is currently a shortage of software developers worldwide, so learning to code can be an easy route into an open field of work. However, this isnt the only way coding can open up job opportunities. Unlike a lot of items on a positions person specification, like a university degree, pretty much anyone can learn to code. It doesnt take several years or cost thousands. In fact, it can pretty much be done online and from the comfort of your own home, and can be learned flexibly around your other commitments.</p>
    </div>
    <div className="col" style={{backgroundColor:'white'}}>
      <br/>
    </div>
    <div className="col-lg-5 col-md-12"style={{backgroundColor:'#619b8a'}}>
    <h2>Future</h2>
    <hr/>
    <p style={{color:'#ffe8d6'}}>For smaller start-ups, hiring someone solely to take care of coding and web design may not be the most economically viable choice. Having coding as a string to your bow can be key to finding jobs related to the field like content creation, marketing, PR and more Even if applying for a position which has no direct relevancy to coding, its still well known as a useful skill. Thus, by having any knowledge of it, you will automatically give yourself a foot up on the competition. On top of it being a generally worthwhile skill in most jobs, it also shows that youre hardworking, dynamic, and a self-starter. Coding is a fantastic skill for you if you are the sort of person who has tons of ideas and wants to get started on everything yesterday. Not having to look elsewhere for a coder saves both time and money, plus it means you can keep changing and redesigning as your idea develops.

</p>
    </div>
  </div>
</div>
    </section>
  )
}

export default Articles;
