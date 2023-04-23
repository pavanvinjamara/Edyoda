import React from 'react'
import './Home.css'

import HomeInfo1 from '../components/HomeInfo1';
import HomeInfo2 from '../components/HomeInfo2';
import HomeInfo3 from '../components/HomeInfo3';

function Home() {
  return (
    <div className='home'>
      <section className='section-home1'>
        <HomeInfo1 className/>
      </section>
      <section className='section-home2'>
        <h1>Continue Learning</h1>
        <div className='h-section'>  
          <HomeInfo2/>
          <HomeInfo3/>
        </div>
      </section>
    </div>
  )
}

export default Home