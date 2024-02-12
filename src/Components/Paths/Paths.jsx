import React from 'react';
import "../Paths/Paths.css";
import { Link } from "react-router-dom"

const Paths = () => {
  return (
    <div className='Routes'>
      <section>
        <Link to="/" className='Link Paths' >Projects</Link>
      </section>
      <section>
        <Link to="/Skills" className='Link Paths' >Skills</Link>
      </section>
      <section>
        <Link to="/Contact" className='Link Paths' >Contact</Link>
      </section>
    </div>
  )
}

export default Paths