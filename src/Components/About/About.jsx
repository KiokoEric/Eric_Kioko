import React from 'react';
import "../About/About.css";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
return (
    <div className='About'>
        <section>
            <h2>About Me</h2>
        </section>
        <section>
            <p>
                I am a detail oriented and motivated professional with expertise in FullStack Software Development. I am adept at crafting elegant and efficient software solutions, troubleshooting and resolving complex technical issues, while consistently meeting deadlines and client expectations.
            </p>
        </section>
        <section>
            <figure>
                <MdLocationOn size="1.5rem" /> 
                <figcaption>
                    <p>Nairobi, Kenya</p>
                </figcaption>
            </figure>
            <figure>
                <FaPhoneAlt size="1.3rem" />
                <figcaption>
                    <p> (+254) 711 621 939</p>
                </figcaption>
            </figure>
            <figure>
                <IoMailSharp size="1.3rem" /> 
                <figcaption>
                    <p>kiokoerick040@gmail.com</p>
                </figcaption>
            </figure>
        </section>
    </div>
)
}

export default About