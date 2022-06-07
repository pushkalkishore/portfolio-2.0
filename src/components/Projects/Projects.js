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
                   <img src="https://user-images.githubusercontent.com/86289322/172388018-d1755e0a-b3bd-40f1-8c52-0166207b4f6f.png" />
                   <div className='layer'>
                       <a href='https://github.com/pushkalkishore/Attendance-System' target="_blank" >
                        <h3>Upastithi</h3>
                        </a>
                   </div>
               </div>

               <div className='project-col'>
                   <img src="https://user-images.githubusercontent.com/86289322/172388372-c425ef68-27d1-48f8-b999-743244fd4891.png" />
                   <div className='layer'>
                   <a href='https://github.com/pushkalkishore/portfolio-2.0' target="_blank" >
                        <h3>This Portfolio website</h3>
                        </a>
                   </div>
               </div>
           </div>

           <div className='row'>
           <div className='project-col'>
                   <img src="https://user-images.githubusercontent.com/86289322/172388604-cb363b0d-f231-47e8-acdf-3508a9d31869.jpg" />
                   <div className='layer'>
                   <a href='https://github.com/pushkalkishore/Classic-Weather-App' target="_blank" >
                        <h3>Classic Weather App</h3>
                        </a>
                   </div>
               </div>

               <div className='project-col'>
                   <img src="https://user-images.githubusercontent.com/86289322/172388407-47380aba-4941-4659-9b7d-b669cf3c9bd4.png" />
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