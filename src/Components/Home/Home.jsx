import React from 'react';
import "../Home/Home.css";
import { MdWavingHand } from "react-icons/md";
import Resume from "../Documents/Eric_Kioko.pdf";
import HomeImage from "../../Images/Home/Eric_Kioko.jpg"; 

const Home = () => {

    const openResume = () => {
        window.open(Resume)
    }

return (
    <div className='Home' >
        <section>
            <h2>Hello, My Name is Eric Kioko <span className='Greet'><MdWavingHand size="1.8rem"/></span></h2>
            <p>
                I am a FullStack Web Developer based in Nairobi, Kenya. I am a passionate and enthusiastic software developer with a passion for crafting clean, efficient, and user-friendly software solutions.
            </p>
            <div>
                <button onClick={openResume} >Resume</button>
            </div>
        </section>
        <section>
            <figure>
                <img src={HomeImage} alt="" />
            </figure>
        </section>
    </div>
)
}

export default Home 