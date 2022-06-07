import React from 'react';
import "./Projects.css";
import london from "../images/london.png"
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.png"


function Projects(props) {
    return (
        <div className='projects' id='projects'>
           <h1>
               Projects
           </h1>
           <p> Check out what I have worked on.</p>

           <div className='row'>

               <div className='project-col'>
                   <img src={p1} />
                   <div className='layer'>
                       <a href='https://github.com/pushkalkishore/Attendance-System' target="_blank" >
                        <h3>Upastithi</h3>
                        </a>
                   </div>
               </div>

               <div className='project-col'>
                   <img src={p2} />
                   <div className='layer'>
                   <a href='https://github.com/pushkalkishore/portfolio-2.0' target="_blank" >
                        <h3>This Portfolio website</h3>
                        </a>
                   </div>
               </div>
           </div>

           <div className='row'>
           <div className='project-col'>
                   <img src={p3} />
                   <div className='layer'>
                   <a href='https://github.com/pushkalkishore/Classic-Weather-App' target="_blank" >
                        <h3>Classic Weather App</h3>
                        </a>
                   </div>
               </div>

               <div className='project-col'>
                   <img src={p4} />
                   <div className='layer'>
                   <a href='https://github.com/pushkalkishore/personal-portfolio-website-2022' target="_blank" >
                        <h3>Previous Portfolio website</h3>
                        </a>
                   </div>
               </div>
            </div>

        </div>
    );
}

export default Projects;