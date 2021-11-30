import React, { useEffect, useState } from 'react';
import './Project.css'
//swiper code
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './style.css'


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


const Project = () => {
    // const project = [
    //     {
    //         id:1,
    //         titel:"Caugu Watch" ,
    //         project:'https://shop-f6c77.web.app/home',
    //         image:'https://unblast.com/wp-content/uploads/2018/07/Watch-Website-Template-5.jpg',
    //         img1:'https://ibb.co/BLdB4vx',
    //         img2:'https://ibb.co/1Lb51GQ',
    //         img3:'https://ibb.co/W5Zz8fk',
    //         img4:'https://ibb.co/jMzcHms',
    //         details:"1.Customers can order any product and delete it 2.The customer will be able to dashboard view his own orders and give reviews 3.Admin Can View All Orders Add New Products, make admin,4. Manage Orders And Products  5.this website Authentication use email and password before 6.user before rejester then login,",
    //         git:'https://github.com/MH01-Hasan/assessment-12',
    //         gitserver:'https://github.com/MH01-Hasan/asserment-12-server-site'
            

    //     },

    //     {
    //         id:2,
    //         titel:"Travel ." ,
    //         project:'https://travel-b6863.web.app/home',
    //         image:'https://travel-b6863.web.app/static/media/image-3.2aa2644d.jpg',
    //         details:"1.Users can be Booking any package and cancel it. and view his own Booking package 2.Google login Authentication. Users can log in to a google account.3. Add a new package and view all Users Booking packages. 4.user after login then book packegs 5.user can see his own order and all user order.",
            
    //         img1:'https://ibb.co/cL61H8N',
    //         img2:'https://ibb.co/WkM24d7',
    //         img3:'https://ibb.co/KFBVKwg',
    //         img4:'https://ibb.co/7KdD9CY',
    //         git:'https://github.com/MH01-Hasan/asserment-11-client-side',
    //         gitserver:'https://github.com/MH01-Hasan/-asserment-11-server-side'
    //     },

    //     {
    //         id:3,
    //         titel:"medecal center ." ,
    //         project:'https://travel-guro-3d22c.web.app',
    //         image:'https://travel-guro-3d22c.web.app/static/media/banner.1.d8adc8a0.jpeg',
    //         details:"1.This site name MeDIZCO CENTER its medical service related website.2.MeDIZCO CENTER provide another service 3. HOW TO PROPERLY WASH HANDS 4. WHAT ARE THE SYMPTOMS OF COVID-19 5. Users login Authentication. Google account, Facebook, Email & password.",
    //         img1:'https://ibb.co/9ZVNS47',
    //         img2:'https://ibb.co/GQPT95W',
    //         img3:'https://ibb.co/y0yhgTK',
    //         img4:'https://ibb.co/Pw0drJW',
    //         git:'https://github.com/MH01-Hasan/asserment-10'
            
    //     },
        
    //     {
    //         id:4,
    //         titel:"Football" ,
    //         project:'https://mh01-hasan.github.io/responsive-ball/',
    //         image:'https://mh01-hasan.github.io/responsive-ball/images/banner.png',
    //         details:'1.this is football relatied website 2.best plyer details 3. some Company sponser .4. next gaming chart',
    //         img1:'https://ibb.co/g4zsgFL',
    //         img2:'https://ibb.co/J5W6BX4',
    //         img3:'https://ibb.co/r0j8rPV',
    //         img4:'https://ibb.co/jMzcHms',
    //         git:'https://github.com/MH01-Hasan/responsive-ball',
            
    //     },


    //     {
    //         id:5,
    //         titel:"Apple M1 chip" ,
    //         project:'https://focused-curie-3fba22.netlify.app/',
    //         image:'https://focused-curie-3fba22.netlify.app/images/mac.png',
    //         details:'1. this website mackbook customizes price calculation 2. user select parse and different value. 3. user uses the pro code to get a special discount. 4. user  can  selected options  delivery, Storage, Memory',
    //         git:'https://github.com/MH01-Hasan/Assignment-5',
    //     },
        
      
       
       
    // ]
const[project,setProject] = useState([])
    
    useEffect(()=>{
       fetch('/project.json')
       .then(res => res.json())
       .then(data => setProject(data))
   },[]);
    return (
        <div className='card-image-slider-fild' >
            <h1 className='project-text'>Project</h1>
            <div className='' >
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch":10,
            "depth": 100,
            "modifier":3,
            "slideShadows": true
            }} pagination={true} className="mySwiper card-control">
                
            {
                project.map(project => <SwiperSlide 
                key={project.id}
                >
                    <Card className='card'>
                <Card.Img variant="top" src={project.image} className='image' />
                <Card.Body>
            <Card.Title>{project.titel}</Card.Title>
                <Link to ={`/details/${project.id}`}>
                <Button variant="primary" className='bay-btn'>Details</Button>
                </Link>    
                </Card.Body>
            </Card>      
                </SwiperSlide>)
            }
            </Swiper>
            </div>
    </div>
    );
};

export default Project;