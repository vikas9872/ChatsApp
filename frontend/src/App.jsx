import getCurrentUser from '../CustomHooks/getCurrentUser'
import './App.css'
import Home from './Compoents/Home'
import Login from './Compoents/Login'
import Signup from './Compoents/Signup'
import {Routes, Route} from 'react-router-dom'

function App() {
  getCurrentUser()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
