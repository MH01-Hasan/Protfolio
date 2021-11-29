import React from 'react';
import './Work.css'
import Zoom from 'react-reveal/Zoom';

const Work = () => {
    return (
        <div>
            <Zoom>
            <div>
                
                <h6 className='university'>  Cague Watch— Online Shops</h6>
               <p className='pragraph'>❖ Customers can order any product and delete it. <br />
                                ❖ The customer will be able to dashboard view his own orders and
                                give reviews. <br />
                                ❖ Admin Can View All Orders, Add New Products, make admin,
                                Manage Orders And Products.</p>
                </div>
           </Zoom>
            <Zoom>
            <div>
            <h6 className='university'> Travel. — A Tourism Travels Agency Website.</h6>
            <p className='pragraph'>
                ❖ Users can be Booking any package and cancel it. and view his own
                 Booking package. <br />
                  ❖ Google login Authentication. Users can log in to a google account. <br />
                   ❖ Add a new package and view all Users Booking packages.</p>
            </div>
           </Zoom>
            <Zoom>
            <div>
            <h6 className='university'>  Medizco Center —.A health service Website.</h6>
            <p className='pragraph'>❖ Responsive Front End Website Design. <br />
                            ❖ Users login Authentication. Google account, Facebook, Email & password. <br />
                            ❖ Users will log in and then see the detailed service.</p>
            </div>
           </Zoom>
            

            
            
        </div>
    );
};

export default Work;