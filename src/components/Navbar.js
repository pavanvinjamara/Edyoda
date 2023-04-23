import React, { useState } from 'react';
import './Navbar.css';
import EdyodaLogo from "../Icons/edyoda-logo.png";
import ProfileLogo from "../Icons/profile-logo.png";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSortDown
  
} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [dropDown, setDropDown] = useState(false);
    const [id, setId] = useState("DS031221");
    
 

    const selectSection = [
        {
            id: 1,
            name: "ECRD"
        },
        {
            id: 2,
            name: "FSR222222"
        },
        {
            id: 3,
            name: "DS261121"
        },
        {
            id: 4,
            name: "DS031221"
        }
    ]

    

    const handleDropDown = () =>{
        setDropDown(prev => !prev)
    }

    const handleCode = (name) =>{
        
        // console.log(name);
        setId(name)
        
    }
    // console.log("pavan");

  return (
    <div className='nav-container'>
        <div className="navbar-one">
            <img src={EdyodaLogo} alt="edyoda-logo" className="nav-logo" />
            <div className="nav-section">
                <p>Hi Test Learner</p>
                <img src={ProfileLogo} alt="profile" className="profile-picture" />
            </div>
        </div>
        <div className='navbar-two'>
            <div className='nav-section2' onClick={handleDropDown}>
                <p>{id}</p>
                <FontAwesomeIcon icon={faSortDown} className={dropDown ? "icon-right": "icon-down"}/>
                <h3>Data Scientist Program</h3>
            </div>
            <div className={dropDown ? 'showSection' : 'hideSection'}>
                <p className='section2-para'>Select Program</p>
                <ul className='nav-list'>
                    {
                        selectSection.map( (section) => {
                            
                            return <li key={section.id} id={section.name} onClick={e => handleCode(e.target.id)} className={section.name === id ? "activeClass" : "inactiveclass"}>{section.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar