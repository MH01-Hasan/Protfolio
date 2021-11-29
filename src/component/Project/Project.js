import React from 'react';
import Fade from 'react-reveal/Fade';
import ProjectData from '../Projectdata/ProjectData';
import './Project.css'

const Project = () => {
    const project = [
        {
            id:1,
            titel:"Football" ,
            project:'https://mh01-hasan.github.io/responsive-ball/',
            image:'https://mh01-hasan.github.io/responsive-ball/images/banner.png'
        },
        {
            id:2,
            titel:"Caugu Watch" ,
            project:'https://shop-f6c77.web.app/home',
            image:'https://unblast.com/wp-content/uploads/2018/07/Watch-Website-Template-5.jpg'
        },
        {
            id:3,
            titel:"Travel ." ,
            project:'https://travel-b6863.web.app/home',
            image:'https://travel-b6863.web.app/static/media/image-3.2aa2644d.jpg'
        },
       
    ]
    return (
        <div className='' >
        
        <div className='row mx-5 mb-5'>
       
        {
          project.map(project => <ProjectData project={project}
          key={project.id}
          ></ProjectData>)  
        }
      
     
        
        </div>
       
    </div>
    );
};

export default Project;