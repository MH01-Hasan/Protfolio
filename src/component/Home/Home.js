import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project/>
            <Resume/>
            <About/>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;