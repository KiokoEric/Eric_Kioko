import React from 'react';
import "../Cook/Cook.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import CookVideo from "../../Images/Cook/Cook.io_Video.mp4";
import Home from "../../Images/Cook/Cook.io_HomePage.jpeg";
import Create from "../../Images/Cook/Cook.io_CreatePage.jpeg";
import Explore from "../../Images/Cook/Cook.io_ExplorePage.jpeg";
import Category from "../../Images/Cook/Cook.io_CategoriesPage.jpeg";
import Nationality from "../../Images/Cook/Cook.io_NationalityPage.jpeg";
import Favourites from "../../Images/Cook/Cook.io_FavouritesPage.jpeg";
import Recipe from "../../Images/Cook/Cook.io_RecipesPage.jpeg";

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Cook = () => {
return (
    <div className='Cook' >
        <figure>
            <video muted controls width="600" >
                <source src={CookVideo} type="video/mp4" />
            </video>
            <figcaption>
                    <button>
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button>
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
            <SwiperSlide><img src={ Home } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Explore } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Category } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Nationality } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Favourites } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Create } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Recipe} alt="" width="500px" /></SwiperSlide>
        </Swiper>
    </div>
)
}

export default Cook