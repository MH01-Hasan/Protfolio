import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectData.css'

const ProjectData = (props) => {
    const {project,image,titel}=props.project
    return (
        <div className='col-lg-4 col-sm-12 mt-5 '>
             
          
       <a href={project} target=' ' className='anchore-tag'>
       <Card className='card'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{titel}</Card.Title>
          
        </Card.Body>
      </Card>
       </a>
   
            
        </div>
    );
};

export default ProjectData;