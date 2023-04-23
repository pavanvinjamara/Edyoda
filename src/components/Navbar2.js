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
  const [colorsbk, setColorsbk] = useState("home1");

  const handlebackground=(event) =>{
    console.log(event.target.id)
    setColorsbk(event.target.id)
  }
  return (
    <div className="nav-three">
      <Link to="/">
          <div onClick={handlebackground} id="home1" className={colorsbk=== "home1" ? "fa-active":'icon-info'}>
            <FontAwesomeIcon icon={faHouseChimney} className={colorsbk=== "home1" ? "icon-active":'fa-icons'}/>
            <p>HOME</p>
          </div>
        </Link>
        <Link to="/module">
          <div onClick={handlebackground} id="module1" className={colorsbk=== "module1" ? "fa-active":'icon-info'}>
            <FontAwesomeIcon icon={faWarehouse}  className={colorsbk=== "module1" ? "icon-active":'fa-icons'} />
            <p>MODULES</p>
          </div>
        </Link>
        <Link to="/instruct">
          <div onClick={handlebackground} id="instruct1" className={colorsbk=== "instruct1" ? "fa-active":'icon-info'}>
            <FontAwesomeIcon icon={faUserPen}  className={colorsbk=== "instruct1" ? "icon-active":'fa-icons'} />
            <p>INSTRUCTIONS</p>
          </div>
        </Link>
    </div>
  )
}

export default Navbar2