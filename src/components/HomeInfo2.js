import React from 'react';
import './HomeInfo2.css'
import ProfileLogo from "../Icons/profile-logo.png";
import DataWrite from '../Icons/Data Wrangling.png';

function HomeInfo2() {
  return (
    <div className='homeinfo2'>
                <h2 >view Module details</h2>
            <div className='sec2'>
             <article className='sec2art1'>
                <div className='home2-sec'>
                    <img src={DataWrite} alt="" />
                    <div className='contained'>
                        <h1>Data wrangling & <br/>visualization</h1>
                        <div className='sec21'>
                        <img src={ProfileLogo} alt=""/>
                        <span>Test Instructor</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='se-flex'>
                        <span>Live Sessions</span>
                        <div className='percent'>
                            <span>0/13</span>
                            <div className='percent1'></div>
                        </div>
                    </div>
                    <div className='se-flex'>
                        <span>Assignments</span>
                        <div className='percent'>
                            <span>0/3</span>
                            <div className='percent1'></div>
                        </div>
                    </div>
                    <div className='se-flex'>
                        <span>MCQ quiz</span>
                        <div className='percent'>
                            <span>0/6</span>
                            <div className='percent1'></div>
                        </div>
                    </div>
                </div>
            </article>
            <article className='sec2art2'>
                <div>
                    <p className='parasec2'>Today's Plan</p>
                    <p className='parasec'>21 March 2022</p>
                </div>
                <h3 className='head1'>Data Transformation using <br/> Pandas - 3</h3>
                <div className='hh1'>
                    <p className='hh1p1'>Daily Feedback</p>
                    <p className='hh1p2'>opens at 07:30 pm</p>
                </div>
                <p className='pavanpara'>Join live session</p>
                <p className='pavanpara1'>begins at 07:30 pm</p>
            </article>
            </div>
            </div>
  )
}

export default HomeInfo2