import React from 'react';
import './HomeInfo1.css'
import DataAnalysis from '../Icons/Data-Analysis.png';

function HomeInfo1() {
  return (
    <section className='infohome1-main-container'>
        <h1>Upcoming Certifications</h1>
        <div className='infohome1-subcontainer1'>
            <article className='infohome1-subcontainer2'>
                <img src={DataAnalysis} alt=''/>
                <div className='infohome1-subcontainer3'>
                    <span className='infohome1-span-1'>Certification | Attempt 1</span>
                    <h1>
                        Data Analysis<br/> Certification
                    </h1>
                    <span className='infohome1-span-2'>completed | 21 mar 2022</span>
                </div>

            </article>
            <article className='infohome1-subcontainer4'>
                <div className='infohome1-subcontainer5'>
                    <p>Exam Structure</p>
                    <div className='infohome1-subcontainer6'>
                        <span>Round 1</span>
                        <span className='infohome1-span-3'>MCQS</span>
                        <span className='infohome1-span-3'>Coding</span>
                        
                    </div>
                    <div className='infohome1-subcontainer6'>
                        <span>Round 2</span>
                        <span className='infohome1-span-3'>project</span>
                    </div>
                </div>
                <button>view exam details</button>
            </article>
        </div>
    </section>
  )
}

export default HomeInfo1