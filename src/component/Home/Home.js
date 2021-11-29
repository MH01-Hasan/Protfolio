import React from 'react';
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
            <Contact></Contact>
            
        </div>
    );
};

export default Home;