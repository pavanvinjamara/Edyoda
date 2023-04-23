import React from 'react';
import './Instruction.css'
import Lovepic from '../Icons/love.png'
function Instruction() {
  return (
    <div className='instruction'>
      <img src={Lovepic} alt="love image"/>
      <h1>Thank You for the Opportunity</h1>
      <p>This Assignment made my skillset improve.</p>
      <p>I hope my work will impress you.</p>
    </div>
  )
}

export default Instruction