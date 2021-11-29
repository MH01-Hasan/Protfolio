import React from 'react';
import './Header.css'
import {  Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='home-component'>
             <Navbar  expand="lg " >

<Navbar.Brand href="#home" className='m'><li className='mehedi-text'>Mehedi Hasan</li></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
  <Navbar.Text className=''>
      <NavLink to ='/home'className='nav-link'><li className='nav-text'> Home </li></NavLink>
      <NavLink to ='/project'className='nav-link'> <li className='nav-text'>Project</li> </NavLink>
      <NavLink to ='/About'className='nav-link'> <li className='nav-text'>About Me</li> </NavLink>
      <NavLink to ='/contact'className='nav-link'> <li className='nav-text'>Contact Me</li> </NavLink>
      <NavLink to ='/blogs'className='nav-link'> <li className='nav-text'>Blogs</li> </NavLink>
     
  
  </Navbar.Text>
</Navbar.Collapse>

</Navbar>
            
            
        </div>
    );
};

export default Header;