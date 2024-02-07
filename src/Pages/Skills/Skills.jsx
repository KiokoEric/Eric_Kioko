import React from 'react'
import "../Skills/Skills.css";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const Skills = () => {
return (
    <div className='Skills' >
        <section>
            <h2>Skills</h2>
            <p>My Technical Stack</p>
        </section>
        <article>
            <section>
                <h2>Front End Languages</h2>
                <div>
                    <figure>
                        <i class="fa-brands fa-html5"></i>
                        <figcaption>
                            <h3>HTML</h3>
                        </figcaption> 
                    </figure>
                    <figure>
                        <i class="fa-brands fa-css3-alt"></i> 
                        <figcaption>
                            <h3>CSS</h3>
                        </figcaption> 
                    </figure>
                    <figure>
                        <i class="fa-brands fa-sass"></i>
                        <figcaption>
                            <h3>SASS</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <SiTailwindcss size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Tailwind CSS</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <i class="fa-brands fa-square-js"></i>
                        <figcaption>
                            <h3>JavaScript</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <i class="fa-brands fa-react"></i>
                        <figcaption>
                            <h3>React JS</h3>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <section>
                <h2>Back End Languages</h2>
                <div>
                    <figure>
                        <FaNodeJs size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Node JS</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <SiExpress size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Express JS</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <SiMongodb size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Mongo DB</h3>
                        </figcaption>
                    </figure>
                    <div className='Center' >
                        <figure>
                            <SiMysql size="3.5rem" className='Reacticon' />
                            <figcaption>
                                <h3>MySQL</h3>
                            </figcaption>
                        </figure>
                        <figure>
                            <BiLogoPostgresql size="3.5rem" className='Reacticon' />
                            <figcaption>
                                <h3>PostgreSQL</h3>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </article>
        <article>
            <section>
                <h2>Others</h2>
                <div>
                    <figure>
                        <FaGitAlt size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Git</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <i class="fa-brands fa-github"></i>
                        <figcaption>
                            <h3>Github</h3>
                        </figcaption>
                    </figure>
                    <figure>
                        <FaSlack size="3.5rem" className='Reacticon' />
                        <figcaption>
                            <h3>Slack</h3>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </article>
    </div>
)
}   

export default Skills