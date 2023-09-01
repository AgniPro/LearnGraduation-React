import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import Header from "./component/Header";
import Menu from "./component/Menu";
import BlogHm from "./pages/BlogHm";
import Login from "./auth/Login";
import Dashboard from "./admin/Dashboard";
import {
  DarkMode,
  handleLogin,
  handleGoogleLogin,
  register,
  api,
} from "./Contexts";
import Post from "./pages/Post";
import Page from "./pages/Page";
import FloatingMessage from "./component/Error";
import Register from "./auth/Register";
import Compose from "./admin/Compose";
import Edit from "./admin/Edit";
import Search from "./pages/Search";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken', 'accessToken']);
  const [user, setuser] = useState("")
  const [loggedIn, setLoggedIn] = useState(!!cookies.accessToken || false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setCookie('refreshToken', token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 60 * 1000), secure: true, sameSite: "none" });
      checkAuth(token);
    } else {
      checkAuth();
    }
  }, []);

  const checkAuth = async (token) => {
    if (token || cookies.refreshToken || cookies.accessToken) {
      const response = await fetch(api + "/check-auth", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json", "refreshToken": token || cookies.refreshToken
        },
        withCredentials: true
      });
      if (response.status === 401) {
        setLoggedIn(false);
        removeCookie('refreshToken', { path: '/' });
        removeCookie('accessToken', { path: '/' });
      } else {
        const data = await response.json();
        setLoggedIn(data.authenticated);
        setuser(data.user)
        setCookie('refreshToken', data.refreshToken, { path: '/', expires: new Date(Date.now() + 24 * 60 * 60 * 1000), secure: true, sameSite: "none" });
        setCookie('accessToken', data.accessToken, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000), secure: true, sameSite: "none" });
      }
    }
  };

  const handleLogout = async () => {
    await fetch(api + "/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json", "refreshToken": cookies.refreshToken
      },
      withCredentials: true
    });
    setLoggedIn(false);
    removeCookie('refreshToken', { path: '/' });
    removeCookie('accessToken', { path: '/' });
  };

  const [statusCode, setstatusCode] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <>
      <Header darkMode={DarkMode} userstate={loggedIn} logout={handleLogout} user={user} googlelogin={handleGoogleLogin} />
      <FloatingMessage statusCode={statusCode} message={message} />
      <div className="mainIn"><Menu />
        <Routes>
          <Route path="/">
            <Route index element={<BlogHm />} />
            <Route
              path="/login"
              element={
                loggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login
                    login={() => handleLogin(setLoggedIn, setCookie, cookies, setstatusCode, setMessage)}
                    googlelogin={handleGoogleLogin}
                    setSessionData={() => setSessionData(setSessionData)}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register
                    googlelogin={handleGoogleLogin} register={() => register(setstatusCode, setMessage)}
                  />
                )
              }
            />
            <Route path="/page/:id" element={<Page />} />
            <Route path="/p/:id" element={<Post cookies={cookies} user={user} loggedIn={loggedIn} />} />
            <Route path="/dashboard" element={
              loggedIn ? (<Dashboard cookies={cookies} setstatusCode={setstatusCode} setMessage={setMessage} />
              ) : (
                <Navigate to="/login" />
              )
            }
            />
            <Route path="/compose" element={
              loggedIn ? (<Compose cookies={cookies} />
              ) : (
                <Navigate to="/login" />
              )
            }
            />
            <Route path="/edit/:id" element={
              loggedIn ? (<Edit cookies={cookies} />
              ) : (
                <Navigate to="/login" />
              )
            }
            />
            <Route path="/search" element={
              <Search />
            }
            />

            <Route path="*" element={"<Error />"} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
