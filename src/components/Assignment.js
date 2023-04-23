import React from 'react'
import Review from './Review'
import './Assignment.css'

function Assignment() {
  return (
    <div className='assignment'>
      <div className='grid'>
      <div>
      <h1 className='head-assign'> Assignment-1: Operators | Loops</h1>
      <p className='para-assign'>20 December 2021</p>
      </div>
      <div className='grid1'>
        <p className='normal-para1'>3</p>
        <p className='normal-para'>Problems</p>

      </div>
      <div className='grid1'> 
        <p className='normal-para1'>100</p>
        <p className='normal-para'>Total Score</p>

      </div>
      </div>
      <p className='small-Para'>Assignment Details</p>


      <div>
        <Review/>
      </div>
    </div>
  )
}

export default Assignment