import { useState } from 'react'
import './style/app.css'
import Navbar from './components/Navbar'

import {Routes,Route} from "react-router-dom"
import AddTask from './components/AddTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Task List</h1>} />
        <Route path='/add' element={<AddTask/>} />
      </Routes>
    </>
  )
}

export default App
