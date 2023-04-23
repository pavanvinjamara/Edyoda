import React, { useState } from 'react'
import PythonIcon from '../Icons/topic.svg'
import QuizIcon from '../Icons/moduleQuiz.svg'
import AssignmentIcon from '../Icons/assignment.svg'
import ActivePythonIcon from '../Icons/activeTopic.svg'
import ActiveQuizIcon from '../Icons/activeModuleQuiz.svg'
import ActiveAssignmentIcon from '../Icons/activeAssignment.svg'

import './NavbarModule.css';
import { Link } from 'react-router-dom';
function NavbarModule() {
  const [colorChange, setColorChange] = useState("python1");

  const handleColorChange =(event)=>{
      setColorChange(event.target.id);
  }
  return (
    <div className='navbar-module'>
        <Link to="/module" className='para-module'>
            <div id="python1" onClick={handleColorChange} className={colorChange=== "python1" ? "active-module":'module-info'}>
                <img src={colorChange=== "python1" ? ActivePythonIcon : PythonIcon} alt=''/>
                <p>Python Loops</p>
            </div>
        </Link>
        <Link to="/module/quiz" className='para-module'>
            <div id="quiz9" onClick={handleColorChange} className={colorChange=== "quiz9" ? "active-module":'module-info'}>
                <img src={colorChange=== "quiz9" ? ActiveQuizIcon : QuizIcon} alt=''/>
                <p >Quiz-1: Data Types</p>
            </div>
        </Link>
        <Link to="/module/assignment" className='para-module'>
            <div id="assign1" onClick={handleColorChange} className={colorChange=== "assign1" ? "active-module":'module-info'}>
                <img src={colorChange=== "assign1" ? ActiveAssignmentIcon : AssignmentIcon} alt='' />
                <div>
                    <h4>Assignment-1:</h4>
                    <p >Operators | Loops</p>
                </div>          
            </div>
        </Link>
    </div>
  )
}

export default NavbarModule