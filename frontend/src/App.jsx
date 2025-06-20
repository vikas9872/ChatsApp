import { useSelector } from 'react-redux'
import getCurrentUser from '../CustomHooks/getCurrentUser.jsx'
import './App.css'
import Home from './Compoents/Home'
import Login from './Compoents/Login'
import Signup from './Compoents/Signup'
import {Routes, Route, Navigate} from 'react-router-dom'
import Profile from './Compoents/Profile'

function App() {
  getCurrentUser()
  let {userData}=useSelector(state=>state.user);
  return (
    <>
      <Routes>
        <Route path='/' element={userData ? <Home/> : <Navigate to={"/login"}/> }/>
        <Route path='/signup' element={!userData ? <Signup/> : <Navigate to={"/profile"}/>} />
        <Route path='/login' element={!userData ? <Login/> : <Navigate to={"/"}/>} />
        <Route path='/profile' element={userData ? <Profile/> : <Navigate to={"/signup"}/>} />
        
      </Routes>
    </>
  )
}

export default App
