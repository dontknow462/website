import React from 'react'
import "./Projects.css";

function Projects({ projectsData }) {
    return (
      <div className="_div_">
           <h1 className="h_1">Here are my projects</h1>
         <div className="cards_">
            
        {projectsData.map((index) => {
          const { img, link, title,lan } = index;
          return (
                <div className="_imag">
                  <img src={img} />
                  <div className="_writings">
                  <h1>{title}</h1>
                    <p className="p___">{lan}</p>
                    <a href={link}> See Project</a>
                  </div>
                  
                </div>
          );
        })}
        </div>
     </div>
    );
  }

export default Projects
