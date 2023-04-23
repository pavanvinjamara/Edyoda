import React from 'react'
import PythonIcon from '../Icons/topic.svg'
import QuizIcon from '../Icons/moduleQuiz.svg'
import AssignmentIcon from '../Icons/assignment.svg'
import './NavbarModule.css';
import { Link } from 'react-router-dom';
function NavbarModule() {
  return (
    <div className='navbar-module'>
        <Link to="/module" className='para-module'>
        <div className='module-info'>
            <img src={PythonIcon} alt=''/>
            <p>Python Loops</p>
        </div>
        </Link>
        <Link to="/module/quiz" className='para-module'>
        <div className='module-info'>
            <img src={QuizIcon} alt=''/>
            <p >Quiz-1: Data Types</p>
        </div>
        </Link>
        <Link to="/module/assignment" className='para-module'>
        <div className='module-info'>
            <img src={AssignmentIcon} alt='' />
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