import React from 'react';
import "../EBudget/EBudget.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import EBudgetVideo from "../../Images/EBudget/EBudget_Video.mp4";
import DashBoard from "../../Images/EBudget/EBudget_Dashboard.jpeg";
import Income from "../../Images/EBudget/EBudget_IncomePage.jpeg";
import Expense from "../../Images/EBudget/EBudget_ExpensePage.jpeg";
import Savings from "../../Images/EBudget/EBudget_SavingsPage.jpeg";
import LoanCalculator from "../../Images/EBudget/EBudget_LoanCalculator.jpeg";

import { EffectCoverflow, Pagination } from 'swiper/modules';

const EBudget = () => {
return (
    <div className='EBudget' >
        <figure>
            <video muted controls width="600" >
                <source src={EBudgetVideo} type="video/mp4" />
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
            <SwiperSlide><img src={ DashBoard } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Income } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Expense } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ Savings } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ LoanCalculator } alt="" width="500px" /></SwiperSlide>
        </Swiper>
    </div>
)
}

export default EBudget