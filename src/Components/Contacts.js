import React,{useState} from 'react';
import './Contact.css'
import {useNavigate} from 'react-router-dom'

const Contacts=() => {
  const navigate = useNavigate()
  const [text,setText] = useState('')
  const[email,setEmail] = useState('')
  const[textarea,setTextarea] =useState('')
  const[submitted,setSubmitted]= useState(false);
  const handleGoingBack =() =>{
    navigate('/')
  }
  
  

  const handleSubmit =(e)=>{
  e.preventDefault()
  setSubmitted(true)

  }
  var regrex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (submitted){
   if( email!=='' && text!=='' && textarea!==''){
     if(email.match(regrex)){
    return(
      <div className="card" style={{height:'50vh',width:'80%',marginLeft:'10%',marginTop:'10vh',backgroundColor:'#0a9396', alignItems:'center'}}>
      <div className="card-body">
      <h2 style={{marginLeft:'0',marginTop:'10%'}}>Thanks for your valuable feedback</h2>
      <button style={{marginLeft:'40%'}}onClick={handleGoingBack} type="button" class="btn btn-success">Go Back </button>
      </div>
    </div>
     )

  }
else{
  setSubmitted(false)
  alert('invalid email address')
 
}} else{
    setSubmitted(false)
    alert('Fill all the required fields')
    
  }
}

  return (
    <section id='contact'>
      <form onSubmit={handleSubmit} target='_blank'>
      <h2 className='text-center'>Contact me</h2>
      <hr/>
      <div className="mb-3">
   <label htmlFor="formGroupExampleInput" className="form-label">Name:  <span style={{color:'red', fontSize:'20px'}}>*</span></label>
   <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" value={text} onChange={(e)=>setText(e.target.value)} required/>
   </div>
   <div className="mb-3">
   <label htmlFor="inputEmail4" className="form-label">Email:  <span style={{color:'red', fontSize:'20px'}}>*</span></label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter a valid Email address" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
 
  <label htmlFor="floatingTextarea" required>Type a message: <span style={{color:'red', fontSize:'20px'}}>*</span></label>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={textarea} onChange={(e)=>setTextarea(e.target.value)} required></textarea>

  <div className="col-12">
    <button onClick={handleSubmit}type="submit" className="btn btn-primary">Submit</button>
  </div>
  </form>
    </section>
  )
}

export default Contacts;
