import { useState } from 'react'
import './App.css'
import Albums from './components/Albums'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update'
import Add from './components/Add';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<><Nav/><Albums/></>} />
            <Route exact path='/update/:id' element={<><Nav/><Update/></>}/>
            <Route exact path='/add' element={<Add/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
