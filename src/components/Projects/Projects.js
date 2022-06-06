import React from 'react';
import "./Projects.css";
import london from "../images/london.png"

function Projects(props) {
    return (
        <div className='projects' id='projects'>
           <h1>
               Projects
           </h1>
           <p> Check out what I have worked on.</p>

           <div className='row'>
               <div className='project-col'>
                   <img src={london} />
                   <div className='layer'>
                       <h3>Upastithi</h3>
                   </div>
               </div>

               <div className='project-col'>
                   <img src={london} />
                   <div className='layer'>
                       <h3>Classic Weather Application</h3>
                   </div>
               </div>

               <div className='project-col'>
                   <img src={london} />
                   <div className='layer'>
                       <h3>Previous Portfolio Website</h3>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Projects;