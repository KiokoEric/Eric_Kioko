import React from 'react';
import "../Projects/Projects.css";
import { Link } from 'react-router-dom';
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Itrack from "../../Images/Itrack/Itrack_Dashboard.jpeg";
import Cook from "../../Images/Cook/Cook.io_HomePage.jpeg";
import Better_Health from "../../Images/BetterHealth/BetterHealth_HomePage.jpeg";
import EBudget from "../../Images/EBudget/EBudget_Dashboard.jpeg";

const Projects = () => {
return (
    <div className='Projects' >
        <h2>My Projects</h2>
        <article>
        <Link className='Link' id='Itrack' to="/Itrack" >
            <figure>  
                <img src={Itrack} alt="" width="400px" />
                <figcaption>
                    <h2>Itrack</h2>
                    <p>Itrack is designed to help development teams manage and track issues or bugs in their software projects. It serves as a centralized system for organizing, prioritizing, and monitoring the progress of identified problems within a software application or system.</p>
                    <div>
                        <i class="fa-brands fa-react"></i>
                        <SiExpress size="2.1rem" className='React' />
                        <SiMongodb size="2.1rem" className='React' /> 
                    </div>
                </figcaption>  
            </figure>
        </Link>
        <Link className='Link' id='Cook' to="/Cook" >
            <figure>  
                <img src={Cook} alt="" width="400px" />
                <figcaption> 
                    <h2>Cook.io</h2>
                    <p>Cook.io is a recipe website that caters to food enthusiasts of all levels. From seasoned chefs to beginners in the kitchen, the platform offers a diverse range of delectable recipes that span cuisines, dietary preferences, and different continents.</p>
                    <div>
                        <i class="fa-brands fa-react"></i>
                        <SiExpress size="2.1rem" className='React' />
                        <SiMongodb size="2.1rem" className='React' />
                        <h3>API</h3>
                    </div>
                </figcaption>
            </figure> 
        </Link>
        <Link className='Link' to="/BetterHealth" >
            <figure>
                <img src={Better_Health} alt="" width="400px" />
                <figcaption>
                    <h2>Better Health</h2>
                    <p>Better Health is an online destination for holistic health and fitness guidance. The website is designed to empower individuals on their journey to optimal well-being by providing comprehensive health and fitness resources.</p>
                    <div>
                        <i class="fa-brands fa-react"></i>
                        <SiExpress size="2.1rem" className='React' />
                        <SiMongodb size="2.1rem" className='React' />
                        <h3>API</h3>
                    </div>
                </figcaption>
            </figure>
        </Link>
        <Link className='Link EBudgets' to="/EBudget" >
            <figure>
                <img src={EBudget} alt="" width="400px" />
                <figcaption>
                    <h2>EBudget</h2>
                    <p>iBudget is a user-friendly and efficient financial application designed to help individuals manage their finances with ease and precision. The application offers a streamlined interface and a range of features that simplify revenue and expense tracking and loan calculation.</p>
                    <div>
                        <i class="fa-brands fa-react"></i>
                        <SiExpress size="2.1rem" className='React' />
                        <SiMongodb size="2.1rem" className='React' />
                    </div>
                </figcaption>
            </figure>
        </Link>
        </article>
    </div>
)
}

export default Projects