import React from 'react'
import './HomeInfo3.css'
function HomeInfo3() {
  return (
    <div className='homeinfo3'>
      <p>Progress Overview</p>
      <div className='info3-subcontainer1'>
        <div className='info3-subcontainer2'>
          <span className='info3-subcontainer2-span1'>0%</span>
          <span className='info3-subcontainer2-span2'>Overall Grade</span>
        </div>
        <div className='info3-subcontainer3'></div>
      </div>

      <div className='info3-subcontainer1'>
        <div className='info3-subcontainer2'>
          <span className='info3-subcontainer2-span1'>0%</span>
          <span className='info3-subcontainer2-span2'>Attendance</span>
        </div>
        <div className='info3-subcontainer3'></div>
      </div>
      <h1 className='info3-header1'>view detailed progress</h1>     
    </div>
  )
}

export default HomeInfo3