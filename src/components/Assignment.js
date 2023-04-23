import React from 'react'
import Review from './Review'
import './Assignment.css'

function Assignment() {
  return (
    <div className='assignment'>
      <div className='assignment-grid-container'>
      <div>
      <h1 className='assignment-header'> Assignment-1: Operators | Loops</h1>
      <p className='assignment-para1'>20 December 2021</p>
      </div>
      <div className='assignment-container2'>
        <p className='assignment-para3'>3</p>
        <p className='assignment-para4'>Problems</p>

      </div>
      <div className='assignment-container2'> 
        <p className='assignment-para3'>100</p>
        <p className='assignment-para4'>Total Score</p>

      </div>
      </div>
      <p className='assignment-para2'>Assignment Details</p>


      <div>
        <Review/>
      </div>
    </div>
  )
}

export default Assignment