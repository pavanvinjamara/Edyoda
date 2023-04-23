import React from 'react';
import './Review.css';
import Calender from '../Icons/calendar.svg';
import Clock from '../Icons/clock-blue.svg'

function Review() {
  return (
    <div className='review'>
      <div className='review-1'>
        <div className='review-cpara'>
        <p className='norm'>3</p>
        <p className='norm1'>Problems</p>
        </div>
        <div >
        <p className='norm'>3</p>
        <p className='norm1'>Total Score</p>
        </div>
        
      </div>
      <div className='review-flex'>
        <div>
          <p className='norm2'>Start:</p>
          <div className='review-2'><img src={Calender} alt='' className='review-icon'/>
          <p className='norm3'>20 December 2021</p></div>
          <div className='review-2'> <img src={Clock} alt="" className='review-icon'/>
          <p className='norm3'>07:30 PM</p></div>
        </div>
        <div>
          <p className='norm2'>Due:</p>
          <div className='review-2'><img src={Calender} alt='' className='review-icon'/>
          <p className='norm3'>20 December 2021</p></div>
          <div className='review-2'> <img src={Clock} alt="" className='review-icon'/>
          <p className='norm3'>07:30 PM</p></div>
        </div>
        </div>
      </div>
  )
}

export default Review