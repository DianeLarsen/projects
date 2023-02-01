import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import "./App.css"
import { UserContext } from './context/UserProvider.js'
import Footer from './components/Footer.js'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
            </ProtectedRoute>}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
      <Footer logout={logout} token={token}/>
    </div>
  )
}
