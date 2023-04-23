import React from 'react';
import './Review.css';
import Calender from '../Icons/calendar.svg';
import Clock from '../Icons/clock-blue.svg'

function Review() {
  return (
    <div className='review'>
      <div className='review-container1'>
        <div className='review-container2'>
          <p className='review-container2-paragh1'>3</p>
          <p className='review-container2-paragh2'>Problems</p>
        </div>
        <div >
          <p className='review-container2-paragh1'>100</p>
          <p className='review-container2-paragh2'>Total Score</p>
        </div>  
      </div>
      
      <div className='review-container3'>
        <div>
          <p className='review-container3-pargh'>Start:</p>
          <div className='review-container4'>
            <img src={Calender} alt='' className='review-icons'/>
            <p className='review-container4-pargh'>20 December 2021</p>
          </div>
          <div className='review-container4'> 
            <img src={Clock} alt="" className='review-icons'/>
            <p className='review-container4-pargh'>07:30 PM</p>
          </div>
        </div>

        <div>
          <p className='review-container3-pargh'>Due:</p>
          <div className='review-container4'>
            <img src={Calender} alt='' className='review-icons'/>
            <p className='review-container4-pargh'>20 December 2021</p></div>
          <div className='review-container4'> 
            <img src={Clock} alt="" className='review-icons'/>
            <p className='review-container4-pargh'>07:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review