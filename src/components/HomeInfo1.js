import React from 'react';
import './HomeInfo1.css'
import DataAnalysis from '../Icons/Data-Analysis.png';

function HomeInfo1() {
  return (
    <section className='infohome1'>
            <h1>Upcoming Certifications</h1>
            <div className='art0'>
            <article className='art1'>
                <img src={DataAnalysis} alt=''/>
                <div className='art2'>
                    <span className='span-1'>Certification | Attempt 1</span>
                    <h1>
                        Data Analysis<br/> Certification
                    </h1>
                    <span className='span-2'>completed | 21 mar 2022</span>
                </div>

            </article>
            <article className='art3'>
                <div className='art4'>
                    <p>Exam Structure</p>
                    <div className='art5'>
                        <span>Round 1</span>
                        <span className='spanc'>MCQS</span>
                        <span className='spanc'>Coding</span>
                        
                    </div>
                    <div className='art5'>
                        <span>Round 2</span>
                        <span className='spanc'>project</span>
                    </div>
                </div>
                <button>view exam details</button>
            </article>
            </div>
        </section>
  )
}

export default HomeInfo1