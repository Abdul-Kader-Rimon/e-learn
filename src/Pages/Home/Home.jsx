import React, { useEffect } from 'react';
import HeroBanner from './Hero';
import PopularCourses from './PopularCourses';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';
import Carousel from './CarouselSection';
 
  

const Home = () => {
    useEffect(() => {
    document.title = "Home | E-Learn"
  },[])
    return (
        <div className='w-full'>
            <HeroBanner />
            <Carousel/>
            <PopularCourses />
            <WhyChooseUs />
            <TopInstructors/>
        </div>
    );
};

export default Home;