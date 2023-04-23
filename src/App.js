import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Module from './pages/Module';
import Instruction from './pages/Instruction';
import PythonModule from './components/PythonModule';
import Quiz from './components/Quiz';
import Assignment from './components/Assignment';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage
  
} from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route  index element={<Home />} />
          <Route exact path="module/" element={<Module/>}>
            <Route  index  element={<PythonModule/>}/> 
            <Route exact path="quiz" element={<Quiz/>}/>
            <Route exact path='assignment' element={<Assignment/>}/>
          </Route>
          <Route exact path="instruct" element={<Instruction/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      <div className='message'>
      <FontAwesomeIcon icon={faMessage} className='mess-icon'/> 
      </div>
    </div>
  );
}

export default App;
