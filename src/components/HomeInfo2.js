import React from 'react';
import './HomeInfo2.css'
import ProfileLogo from "../Icons/profile-logo.png";
import DataWrite from '../Icons/Data Wrangling.png';

function HomeInfo2() {
  return (
    <div className='homeinfo2-main-container'>
        <h2 >view Module details</h2>
        <div className='homeinfo2-subcontainer1'>
            <article className='homeinfo2-subcontainer2'>
                <div className='homeinfo2-subcontainer3'>
                    <img src={DataWrite} alt="" />
                    <div className='homeinfo2-subcontainer4'>
                        <h1>Data wrangling & <br/>visualization</h1>
                        <div className='homeinfo2-subcontainer5'>
                            <img src={ProfileLogo} alt=""/>
                            <span>Test Instructor</span>
                        </div>
                    </div>
               </div>
                <div>
                    <div className='homeinfo2-subcontainer6'>
                        <span>Live Sessions</span>
                        <div className='homeinfo2-subcontainer7'>
                            <span>0/13</span>
                            <div className='homeinfo2-subcontainer8'></div>
                        </div>
                    </div>
                    <div className='homeinfo2-subcontainer6'>
                        <span>Assignments</span>
                        <div className='homeinfo2-subcontainer7'>
                            <span>0/3</span>
                            <div className='homeinfo2-subcontainer8'></div>
                        </div>
                    </div>
                    <div className='homeinfo2-subcontainer6'>
                        <span>MCQ quiz</span>
                        <div className='homeinfo2-subcontainer7'>
                            <span>0/6</span>
                            <div className='homeinfo2-subcontainer8'></div>
                        </div>
                    </div>
                </div>
            </article>
            <article className='homeinfo2-subcontainer10'>
                <div>
                    <p className='homeinfo2-subcontainer10-pargh1'>Today's Plan</p>
                    <p className='homeinfo2-subcontainer10-pargh2'>21 March 2022</p>
                </div>
                <h3 className='homeinfo2-subcontainer10-head1'>Data Transformation using <br/> Pandas - 3</h3>
                <div className='homeinfo2-subcontainer11'>
                    <p className='homeinfo2-subcontainer11-para1'>Daily Feedback</p>
                    <p className='homeinfo2-subcontainer11-para2'>opens at 07:30 pm</p>
                </div>
                <p className='homeinfo2-subcontainer11-para3'>Join live session</p>
                <p className='homeinfo2-subcontainer11-para4'>begins at 07:30 pm</p>
            </article>
        </div>
    </div>
  )
}

export default HomeInfo2