import React from 'react'
import './HomeInfo3.css'
function HomeInfo3() {
  return (
    <div className='homeinfo3'>
        <p>Progress Overview</p>
        <div className='info3percent'>
            <div className='contflex'>
                <span className='info3span1'>0%</span>
                <span className='info3span2'>Overall Grade</span>
                </div>
                <div className='contperc'></div>
            </div>
            <div className='info3percent'>
            <div className='contflex'>
            <span className='info3span1'>0%</span>
                <span className='info3span2'>Attendance</span>
                </div>
                <div className='contperc'></div>
            </div>
            <h1 className='inheader'>view detailed progress</h1>
        
    </div>
  )
}

export default HomeInfo3