import React from 'react';
import "../Paths/Paths.css";
import { Link } from "react-router-dom"

const Paths = () => {
  return (
    <div className='Routes'>
      <section>
        <Link to="/" className='Link' >Projects</Link>
      </section>
      <section>
        <Link to="/Skills" className='Link' >Skills</Link>
      </section>
      <section>
        <Link to="/Contact" className='Link' >Contact</Link>
      </section>
    </div>
  )
}

export default Paths