import React from 'react';
import EachProject from './EachProject';
import ScoreKeeper from './Images/Scorekeeper.jpg';
import CalorieTracker from './Images/CalorieTracker.jpg';
import BookGame from './Images/Book.png';
import Todos from './Images/Todo.jpg';
import ImageSeeker from './Images/Image-Collage.jpg';
import widgets from './Images/Widgets.jpg';
import Ecom from './Images/Ecom.jpg'
import TodoReact from './Images/TodoReact.jpg'
import Contact from './Images/contact.jpg'
import 'bootstrap';
import './Projects.css'

const Projects=()=>{
    return(

         <div className="container"  >
           <h2 style={{color:'#1d3557',textTransform:'uppercase',fontSize:'24px'}} className='text-center'>Projects</h2>
           <hr/>
                <div className='next' >
                    <EachProject address='https://tabeena-s-ecom-app.netlify.app' img={Ecom} text='Shop favourites at your doorstep.' heading='E-commerce App'/>
                    <EachProject address='https://react-redux-contact-app-tj.netlify.app' img={Contact} text='Organise your contacts.' heading='Contacts App'/>
                    <EachProject address='https://todos-listing.netlify.app' img={Todos} text='Manage your day with list of todos.' heading='Todo list'/>
                    <EachProject address='https://scorekeeeper.netlify.app' img={ScoreKeeper} text='Track the score of 2 teams.' heading='Score-Keeper'  />
                    <EachProject address='https://calorie-track.netlify.app' img={CalorieTracker} text='Keep track of your calorie intake.' heading='Calorie-Tracker'  />
                    <EachProject address='https://book-game.netlify.app' img={BookGame} text='Play your favourite book game.' heading='Book-Game'  />
                    <EachProject address='https://widgets-tj.netlify.app/' img={widgets} text='Use encyclopedia and translate text' heading='Trajour'  />
                    <EachProject address='https://react-todo-app-tj.netlify.app/' img={TodoReact} text='Make your hectic day easier.' heading='React Todo list '  />
                    <EachProject address='https://explore-pictures.netlify.app/' img={ImageSeeker} text='Get images just by typing a word.' heading='Image-Seeker'  />
                  
                </div>
    </div>
    
    );

}

export default Projects;