import React from 'react';
import './Education.css'
import Bounce from 'react-reveal/Bounce';

const Education = () => {
    return (
        <div>
             <Bounce right>
             <div className='fild'>
           <div className=''>
                <h6 className='university'> ❖ University College Of Technology</h6>
                <p className='pragraph'> B.Sc in Computer Science & Engineering:</p>
           </div>
           <div>
               <p className='year'>2019-Present</p>
           </div>
        </div>
          
        </Bounce>
        <Bounce right> 
        <div className='fild'>
           <div className=''>
                <h6 className='university'> ❖ Programming Hero</h6>
                <p className='pragraph'> Full Stack Web Developer Course</p>
           </div>
           <div>
               <p className='year'>2021</p>
           </div>
        </div>
        
        </Bounce> 
        <Bounce right> 
        <div className='fild'>
           <div className=''>
                <h6 className='university'> ❖ Kadam Rasul College</h6>
                <p className='pragraph'> HSC (Science)</p>
           </div>
           <div>
               <p className='year'>2016-2017</p>
           </div>
        </div>
      

        </Bounce> 
        
        </div>
    );
};

export default Education;