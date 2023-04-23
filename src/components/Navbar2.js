import React, { useState } from 'react'
import './Navbar2.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUserPen,
  faWarehouse
  
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar2() {
  const [colorsbk, setColorsbk] = useState(true);

  const handlebackground=() =>{
    setColorsbk(!true)
  }
  return (
    <div className="nav-three">
        <Link to="/">
            <div onClick={handlebackground} className={colorsbk?"fa-active":'icon-info'}>
            <FontAwesomeIcon icon={faHouseChimney} className='fa-icons'/>
                <p>HOME</p>
            </div>
         </Link>
         <Link to="/module">
            <div className={colorsbk?'icon-info' : "fa-active"}>
            <FontAwesomeIcon icon={faWarehouse} className='fa-icons' />

                <p>MODULES</p>
            </div>
            </Link>
            <Link to="/instruct">
            <div className={colorsbk?'icon-info': "fa-active"}>
            <FontAwesomeIcon icon={faUserPen} className='fa-icons' />

                <p>INSTRUCTIONS</p>
            </div>
            </Link>
            <div>
           

            </div>
        </div>
  )
}

export default Navbar2