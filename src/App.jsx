import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import GetStarted from './Components/GetStarted'
import SignUp from './Components/SignUp'
import Home from './Components/home'
import Details from './Components/Details'
import Favorites from './Components/Favorite'
import Library from './Components/Library'
import Profile from './Components/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<GetStarted/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/favorite' element={<Favorites/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </>
  )
}

export default App
