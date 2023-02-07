import { Routes, Route, Navigate} from "react-router-dom"
import React, {useContext} from 'react'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import Navbar from "./components/Navbar";
import Home from './pages/Home.js'
import Profile from './pages/Profile.js'
import Settings from "./pages/Settings.js";
import Footer from './components/Footer.js'

function App() {
  const { token, logout, openLogin, loginWindow, newUser } = useContext(UserContext)
  return (
    <div className="App">
    
    <Navbar token={token} logout={logout} openLogin={openLogin} loginWindow={loginWindow}/>
      <div className="pages">
      
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to={newUser ? "/settings" : "/profile"}/> : <Home />}
        />
        <Route 
          path="/settings"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Settings />
            </ProtectedRoute>}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
            </ProtectedRoute>}
        />
        
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
