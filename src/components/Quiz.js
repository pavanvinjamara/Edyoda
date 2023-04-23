import React from 'react'
import './Quiz.css'
import Review from './Review'

function Quiz() {
  return (
    <div className='quiz'>
      <div>
        <h1 className='head-quiz'> Quiz: Data Types</h1>
        <p className='para-quiz'>16 December 2021, Thursday</p>
      </div>
      <p className='small-Para5'>Quiz Details</p>
      <Review/>
    </div>
  )
}

export default Quiz