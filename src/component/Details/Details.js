import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {id}=useParams();
    const[projects,setProjects] = useState({})
    console.log(projects)
     useEffect(()=>{
    fetch('/project.json')
    .then(res => res.json())
    .then(data =>
        {
            const singleservice=data.find(d=>d.id==id)
            setProjects(singleservice)
        })
},[id]);
//
// project
// titel
// details
// git
// gitserver

//

    return (
        <div className=''>
            <div className='row container'>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <div>
                        <img src={projects.image} className='w-100 img-fluid image' alt="" />
                        <div className='anchor'>
                        <a href={projects.project} className='a-cor' target="#">Live Site</a> 
                        <a href={projects.git} className='a-cor'target="#">Github code</a> 
                       {projects.gitserver && <a href={projects.gitserver} className='a-cor' target="#">server Site</a>}
                        </div>
                        <h6 className='details-text'>{projects?.details}</h6>
                    </div>

                </div>
               

            </div>

        </div>
    );
  
};

export default Details;