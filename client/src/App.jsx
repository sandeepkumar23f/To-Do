import { useState } from 'react'
import './style/app.css'
import Navbar from './components/Navbar'
import List from './components/List'
import {Routes,Route} from "react-router-dom"
import AddTask from './components/AddTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/add' element={<AddTask/>} />
      </Routes>
    </>
  )
}

export default App
