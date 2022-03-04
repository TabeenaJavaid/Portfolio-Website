import React from 'react';
import 'bootstrap';
import './EachProject.css';


const EachProject=({img, address, text, heading})=>{
    return(
       
        <div className='each' style={{ marginBottom: '20px',marginTop: '50px', display: 'inline-flex', justifyContent: 'center', marginRight: '40px'}}>
            <div className='row'>

                <div className="col-lg-6 col-md-4 ">
                    <div className="card" style={{ width: "18rem",height:'20rem' }}>
                       <img style={{ backgroundBlendMode: 'saturation', height: '120px', width: '100%' }}
                          src={img} className="card-img-top" alt="..." />
                       
                        <div className="card-body">
                            <h3 style={{ fontFamily: 'cursive' }} className="card-text">{heading}</h3>
                            <hr />
                            <p>{text}</p>
                            <a href={address}  target='_blank' rel='noreferrer' className="btn btn-secondary" style={{marginLeft:'65px', marginTop:'10px',marginRight:'50px'}} >Get started</a>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
}


export default EachProject;