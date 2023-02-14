import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./context/UserProvider.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login.js";
import Home from "./pages/Home.js";
import Settings from "./pages/Settings.js";
import Footer from "./components/Footer.js";
import Posts from "./pages/Posts.js";
import Profile from "./pages/profile/Profile.js";
import NewLogin from "./pages/login/NewLogin.js";
function App() {
  const { token, logout, openLogin, loginWindow, newUser } =
    useContext(UserContext);
    
  return (
    <div className="App">
      <Navbar
        token={token}
        logout={logout}
        openLogin={openLogin}
        loginWindow={loginWindow}
      />
      <div className="pages">
        <Routes>
        <Route
            path="/"
            element={
              token ? (
                <Navigate to={newUser ? "/settings" : "/profile"} />
              ) : (
                <NewLogin />
              )
            }
          />
          <Route
            path="/"
            element={
              token ? (
                <Navigate to={newUser ? "/settings" : "/profile"} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute token={token} redirectTo="/">
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute token={token} redirectTo="/">
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoute token={token} redirectTo="/">
                <Posts />
              </ProtectedRoute>
            }
          />
           <Route
            path="/profile"
            element={
              <ProtectedRoute token={token} redirectTo="/">
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <ProtectedRoute token={token} redirectTo="/">
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
