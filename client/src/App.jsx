// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Applications';
import ApplyJob from './pages/ApplyJob';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/application' element={<Application />} />
      </Routes>
    </div>
  )
}

export default App
