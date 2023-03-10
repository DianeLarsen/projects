import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    tasks: [],
    errMsg: "",
  };
  const initlogstate = localStorage.getItem("loggedIn") || false;
  const [loggedIn, setLoggedIn] = useState(initlogstate);
  const [loginWindow, setLoginWindow] = useState(false);
  const [userState, setUserState] = useState(initState);
  const [newUser, setNewUser] = useState(userState.user.newUser);
 
  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  // set logged in to true
  useEffect(() => {
    userState.token !== "" && setLoggedIn(true);
  }, [userState.token]);

  if (loggedIn) {
    localStorage.setItem("loggedIn", loggedIn);
  }

  //  gets the tasks of the user
  useEffect(() => {
    loggedIn && userState.token !== "" && getUserTasks();
  }, [loggedIn, userState.token]);
  
  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
        userState.token !== "" && getUserTasks();
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function logout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    setUserState({
      user: {},
      token: "",
      tasks: [],
    });
  }
  function openLogin() {
    setLoginWindow(!loginWindow);
  }
  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function resetAuthErr() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  function getUserTasks() {
    userAxios
      .get("/api/task/user")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          tasks: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addTask(newTask) {
    userAxios
      .post("/api/task", newTask)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          tasks: [...prevState.tasks, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }
  function updateUser(update) {
    console.log(update)
    userAxios
      .patch("/api/user/user", update)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addTask,
        resetAuthErr,
        loggedIn,
        openLogin,
        loginWindow,
        newUser,
        setNewUser,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
