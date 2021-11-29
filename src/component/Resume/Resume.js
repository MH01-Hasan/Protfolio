import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Education from '../Bio/Education/Education';
import Interests from '../Bio/Interests/Interests';
import Skils from '../Bio/Skils/Skils';
import Work from '../Bio/Work/Work';
import './Resume.css'

const Resume = () => {
    let { path, url } = useRouteMatch();

    return (

<div className='  resume-fild mb-5 background '>
    <h1 className='resume-text'>Resume</h1>
    <small className='formal'>My formal Bio Details</small>
    <div className='row'>
            <div className='col-lg-4 col-sm-6 dashbord-list'>  
                   <div className='dispaly-icon'>
                       <div className='icon-control' >
                           
                               <li><i className="fas fa-user-graduate fa-icon"></i></li>
                               <li><i className="fas fa-laptop fa-icon"></i></li>
                               <li><i className="far fa-chart-bar fa-icon"></i></li>
                               <li><i className="fas fa-palette fa-icon"></i></li>
                        </div>

                            <div className='text-control'>
                            <Link  to={`${url}/education`}className='nested-link'>
                                <li className="dashboard-menu "> Education</li>  
                            </Link>
                            <Link  to={`${url}/skils`} className='nested-link'>
                                <li className="dashboard-menu ">Programming Skils </li>
                                </Link>
                                <Link  to={`${url}/work`} className='nested-link'>
                                <li className="dashboard-menu "> Project</li>
                                </Link>
                                <Link  to={`${url}/interests`} className='nested-link'>
                                <li className="dashboard-menu "> Interests</li>
                                </Link>

                            </div>


                   </div>
            </div>


             <div className='col-lg-8 col-sm-6 component'>
                    <Switch>
                <Route  exact path={`${path}/education`}>
                    <Education></Education>
                </Route>
                <Route  exact path={`${path}/skils`}>
                    <Skils></Skils>
                </Route>
        
                <Route  exact path={`${path}/work`}>
                   <Work></Work>
                </Route>
                
                <Route  exact path={`${path}/interests`}>
                   <Interests></Interests>
                </Route>
                
                </Switch>
           </div>
    </div>
             
  </div>

            
       
    );
};

export default Resume;