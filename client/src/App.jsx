// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import ApplyJob from './pages/ApplyJob';

const App = () => {
  return (
    <div className='text-blue-500 text-4xl text-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/application' element={<Application />} />
      </Routes>
    </div>
  )
}

export default App