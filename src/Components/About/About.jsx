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
            I discovered a love for web development 2 years ago when I enrolled in a 2 week Javascript boot camp. I was greatly captivated by the idea presented by the teachers who highlighted all the possibilities that could be achieved through web development. After the boot camp, I began a self-taught web development journey which saw me progress through tutorials, books and mentorship. In these 2 years, I have developed myself as a full-stack software developer with real-world projects. I am excited to venture into a career as a full-stack developer where I can contribute to enhancing a user’s web experience.
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