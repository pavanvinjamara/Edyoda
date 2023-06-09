import React, { useState } from 'react';
import './Session.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faCirclePlay,
  faFile
  
} from '@fortawesome/free-solid-svg-icons';

const Session = () => {
  const [activeButton, setActiveButton] = useState(1); 

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className='session'>
      <div className='nav-buttons'>
        <button onClick={() => handleButtonClick(1)} className={activeButton === 1 ? 'active' : 'normalbutton1'}><span className='i-icon'> i</span> <span className="span9">SESSION PLAN</span></button>
        <button onClick={() => handleButtonClick(2)} className={activeButton === 2 ? 'active' : 'normalbutton1'}> <FontAwesomeIcon icon={faCirclePlay} className='iiicon'/> <span className='sspan'>PRE-WATCH</span></button>
        <button onClick={() => handleButtonClick(3)} className={activeButton === 3 ? 'active' : 'normalbutton1'}> <FontAwesomeIcon icon={faVideo} className='iiicon'/> <span className='sspan'>SESSION RECORDING</span></button>
        <button onClick={() => handleButtonClick(4)} className={activeButton === 4 ? 'active' : 'normalbutton1'}><FontAwesomeIcon icon={faFile} className='iiicon'/><span className='sspan'>REFERENCES</span></button>
      </div>
      <div className='session-container'>
        {
          activeButton === 1 && 
          <div >
              <h3 className='h-session'>Session Plan</h3>
              <p className='p-session'>LIVE session is about to start Please stay tuned.</p>
              <p className='p2-session'>JOIN LIVE SESSION</p>
              <h4 className='h1-session'>Sub-topics</h4>
              <ol className='ol'>
              
              <li className='p-session'>Sorting and Indexing Dataframe</li>
              <li className='p-session'>Filtering Dataframe</li>
              <li className='p-session'>Usage of Ioc and iloc functions</li>
              </ol>
              <h4 className='h1-session'>Session Details</h4>
          </div>
        }
        {activeButton === 2 && <p>Content for Button 2</p>}
        {activeButton === 3 && <p>Content for Button 3</p>}
        {activeButton === 4 && <p>Content for Button 4</p>}
      </div>
    </div>
  );
};

export default Session;
