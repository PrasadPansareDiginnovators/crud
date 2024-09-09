import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './componants/Home'
import Read from './componants/Read'
import Update from './componants/Update'
import Create from './componants/Create'
import Delete from './componants/Delete'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path="/delete/:id" element={<Delete/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
