import { Routes, Route, Navigate} from "react-router-dom"
import React, {useContext} from 'react'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import Navbar from "./components/Navbar";
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'


function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
    
    {token && <Navbar logout={logout}/>}
      <div className="pages">
      
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
       
      </Routes>
      </div>
    </div>
  );
}

export default App;
