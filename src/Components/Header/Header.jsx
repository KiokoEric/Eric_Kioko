import React, { useEffect, useState} from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import "../Header/Header.css";
import "../../App.css"

const Header = () => {

    const [Theme, setTheme] = useState("Dark-Theme");
    const [ExtendNavbar,setExtendNavbar ] = useState(false)
    const [Color, setColor] = useState(false)

    const ToggleTheme = () => {
        if (Theme === "Dark-Theme") {
            setTheme("Light-Theme")
        }
        else {
            setTheme("Dark-Theme")
        }
    }; 

    useEffect(() => {
        document.documentElement.className = Theme;
        localStorage.setItem("Values", JSON.stringify(Theme))
    },[Theme])

    const OnScroll = () => {
        if (window.scrollY > 0) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", OnScroll)

return (
        <header className={Color ? "Header HeaderScroll" : "Header"} >
            <article>
                <section>
                    <h3>Eric Kioko.</h3>
                </section>
                <section>
                    <figure onClick={ToggleTheme} >
                        {Theme === "Dark-Theme" ? <BsFillMoonFill size="1.3rem" id="Bright" /> : <BsFillSunFill size="1.3rem" id="Bright" /> }
                    </figure>
                    <figure onClick={()=> {setExtendNavbar((curr) => !curr)}} >
                        {ExtendNavbar ? <i id='Bars' class="fa-solid fa-xmark"></i> : <i  id="Bars" class="fa-solid fa-bars"></i>}
                    </figure>
                </section>
            </article>
        </header>    
)
}

export default Header