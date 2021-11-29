import React from 'react';
import './Banner.css'
import Slide from 'react-reveal/Slide';
import image from '../../image/IMG_0990.JPG'

const Banner = () => {
    return (
        <div className='home-component'>
            <div className='row'>
                <div className='col-lg-7 col-sm-12 mehedi-fild'>
                  <div className='mehedi'>
                      <div>
                      <Slide left>
                        <h4>Hello i'am Mehedi Hasan</h4>
                        </Slide>
                      </div>
                  
                     
                      <h6>
                      Full Stack Web Developer
                      </h6>
        

                  <a href="mehedi.pdf" download='mehedi hasan resume.pdf'>
                      <button className='resume'>Download Resume</button>
                  </a> <br />
 
                  </div>
                 

                </div>
                <div className='col-lg-5 col-sm-12'>
                   <div>
                    <img src={image} alt="" className='mehedi-image' />
                   
                   </div>
                   <div className='icon-fild'>
                   <Slide right>
                      <div>
                       <a href="https://www.facebook.com/mehedi.0802"className='soceal-icon'target="">
                           <i className="fab fa-facebook-square icon-site"></i>
                        </a> 
                       <a href="https://www.linkedin.com/in/mehedi-hasan-a640b2227/" className='soceal-icon' target=""> 
                       <i className="fab fa-linkedin icon-site"></i>
                       </a>  

                      <a href="https://github.com/MH01-Hasan" className='soceal-icon' target="">
                           <i className="fab fa-github-square icon-site"></i>
                           </a> 
                      </div>
                 
                   </Slide>
                   </div>
                  
    
                </div>

            </div>
        
        </div>
    );
};

export default Banner;