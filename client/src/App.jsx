import { useState } from 'react'
import './style/app.css'
import Navbar from './components/Navbar'
import List from './components/List'
import {Routes,Route} from "react-router-dom"
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask'
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/add' element={<AddTask/>} />
        <Route path='/update/:id' element={<UpdateTask/>}></Route>
      </Routes>
    </>
  )
}

export default App
