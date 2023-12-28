import { useState } from 'react'
import './App.css'
import Albums from './components/Albums'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update'
import Add from './components/Add';

function App() {

  const [ title, setTitle ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ albums, setAlbums ] = useState([]);
  const [ dataFetched, setDataFetched ] = useState(false);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<><Nav/><Albums dataFetched={dataFetched} setDataFetched={setDataFetched} albums={albums} setAlbums={setAlbums} /></>} />
            <Route exact path='/update/:id' element={<><Nav/><Update setAlbums={setAlbums} albums={albums} title={title} setTitle={setTitle}/></>} />
            <Route exact path='/add' element={<Add setAlbums={setAlbums} albums={albums} title={title} setTitle={setTitle} userId={userId} setUserId={setUserId} />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
