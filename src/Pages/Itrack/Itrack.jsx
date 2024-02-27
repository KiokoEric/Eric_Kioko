import React from 'react';
import "../Itrack/Itrack.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ItrackVideo from "../../Images/Itrack/Itrack_Video.mp4";
import DashBoard from "../../Images/Itrack/Itrack_Dashboard.jpeg";
import CreateProject from "../../Images/Itrack/Create_Project.jpeg";
import MyProjects from "../../Images/Itrack/My_Projects.jpeg";
import AllProjects from "../../Images/Itrack/All_Projects.jpeg";
import ArchivedProjects from "../../Images/Itrack/Archived_Projects.jpeg";
import CreateTicket from "../../Images/Itrack/Create_Ticket.jpeg";
import MyTickets from "../../Images/Itrack/My_Tickets.jpeg";
import AllTickets from "../../Images/Itrack/All_Tickets.jpeg";
import ArchivedTickets from "../../Images/Itrack/Archived_Tickets.jpeg";
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Itrack = () => {

    const ItrackGithub = () => {
        window.open(`https://github.com/KiokoEric/Itrack`)
    }

    const Itrack = () => {
        window.open(`https://itrack-pdps.onrender.com`)
    }

return (
    <div className='Itrack' >
        <figure>
            <video controls width="600" >
                <source src={ItrackVideo} type="video/mp4" />
            </video>
            <figcaption>
                    <button onClick={ItrackGithub} >
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button onClick={Itrack} >
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
            <SwiperSlide><img src={ DashBoard} alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ CreateProject } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ MyProjects } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ AllProjects } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ ArchivedProjects } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ CreateTicket } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ MyTickets } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ AllTickets } alt="" width="500px" /></SwiperSlide>
            <SwiperSlide><img src={ ArchivedTickets } alt="" width="500px" /></SwiperSlide>
        </Swiper>
    </div>
)
}

export default Itrack