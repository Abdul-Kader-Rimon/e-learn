import React from 'react';
import HeroBanner from './Hero';
import PopularCourses from './PopularCourses';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <PopularCourses/>
        </div>
    );
};

export default Home;