import React from 'react';
import './Header.css'
import {  Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <Navbar  expand="lg" bg="dark" variant="dark"  >

    <Navbar.Brand href="#home" className='mx-5'>Mehedi Hasan</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='mx-3'>
          <NavLink to ='/home'className='nav-link'> Home </NavLink>
          <NavLink to ='/project'className='nav-link'> Project </NavLink>
          <NavLink to ='/contact'className='nav-link'> Contact Me </NavLink>
         
      
      </Navbar.Text>
    </Navbar.Collapse>
 
</Navbar>
            
        </div>
    );
};

export default Header;