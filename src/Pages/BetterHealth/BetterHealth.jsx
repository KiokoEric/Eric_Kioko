import React from 'react';
import "../BetterHealth/BetterHealth.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'; 
import BetterHealthVideo from "../../Images/BetterHealth/BetterHealth_Video.mp4";
import Home from "../../Images/BetterHealth/BetterHealth_HomePage.jpeg";
import Exercise from "../../Images/BetterHealth/BetterHealth_ExercisesPage.jpeg";
import Nutrition from "../../Images/BetterHealth/BetterHealth_NutritionPage.jpeg";
import Fitness from "../../Images/BetterHealth/BetterHealth_FitnessCalculator.jpeg";
import Favourites from "../../Images/BetterHealth/BetterHealth_Favourites.jpeg";
import Customise from "../../Images/BetterHealth/BetterHealth_CreatePage.jpeg";
import Workout from "../../Images/BetterHealth/BetterHealth_MyWorkout.jpeg"; 

import { EffectCoverflow, Pagination } from 'swiper/modules';

const BetterHealth = () => {

    const BetterHealthGithub = () => {
        window.open(`https://github.com/KiokoEric/Better_Health`)
    }

    const BetterHealth = () => {
        window.open(`https://better-health.onrender.com`)
    }

return (
    <div className='BetterHealth' >
        <figure>
            <video muted controls width="600" >
                <source src={BetterHealthVideo} type="video/mp4" />
            </video>
            <figcaption>
                    <button onClick={BetterHealthGithub}>
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button onClick={BetterHealth} >
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo
                    </button> 
            </figcaption>
        </figure>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
            <SwiperSlide><img src={ Home } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Exercise } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Nutrition } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Fitness } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Favourites } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Customise } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Workout } alt="" /></SwiperSlide>
        </Swiper>
    </div>
)
}

export default BetterHealth