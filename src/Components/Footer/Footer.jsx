import React from 'react';
import "../Footer/Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { BsGithub} from "react-icons/bs"

const githubProfile = () => {
    window.open(`https://github.com/KiokoEric`)
}

const LinkedinProfile = () => {
    window.open(`https://www.linkedin.com/in/kioko-eric`)
}

const Footer = () => {
return (
    <div className='Footer' >
        <button onClick={LinkedinProfile} >
            <FaLinkedin size="2.2rem" className='Icon'  />
        </button>
        <button onClick={githubProfile} >
            <BsGithub size="2rem" className='Icon'  />
        </button>
    </div>
)
}

export default Footer