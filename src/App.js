import React, { useEffect } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import Header from "./component/Header";
import Menu from "./component/Menu";
import BlogHm from "./pages/BlogHm";
import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import {
  DarkMode,
  ThemeContext,
  handleLogin,
  handleGoogleLogin,
  date,
} from "./Contexts";
import Post from "./pages/Post";
import Page from "./pages/Page";

function App() {
  const api="http://localhost:3000";
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken','accessToken']);

  const [theme, setTheme] = useState("light");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setCookie('refreshToken', data.refreshToken, { path: '/' , expires: new Date(Date.now() + 24*60*60*1000) ,secure:true , sameSite:"none",domain:".learngraduation.onrender.com",httpOnly:true});
      checkAuth();
    }
    const checkAuth = async () => {
      const response = await fetch(api + "/check-auth", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      const data = await response.json();
      setLoggedIn(data.authenticated);
      setCookie('refreshToken', data.refreshToken, { path: '/' , expires: new Date(Date.now() + 24*60*60*1000) ,secure:true , sameSite:"none",domain:".learngraduation.onrender.com",httpOnly:true});
      setCookie('accessToken', data.accessToken, { path: '/' , expires: new Date(Date.now() + 60*60*1000),secure:true , sameSite:"none",domain:".learngraduation.onrender.com",httpOnly:true});
    };
    checkAuth();
  }, []);


  const handleLogout = async () => {
    await fetch(api+"/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
    });
    setLoggedIn(false);
    removeCookie('refreshToken', { path: '/'});
    removeCookie('accessToken', { path: '/'});
  };

  return (
    <ThemeContext.Provider value={theme} set={setTheme}>
      <Header darkMode={DarkMode} userstate={loggedIn} logout={handleLogout} googlelogin={handleGoogleLogin} />
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
                    login={() => handleLogin(setLoggedIn,setCookie)}
                    googlelogin={handleGoogleLogin}
                    setSessionData={()=> setSessionData(setSessionData)}
                    />
                )
              }
            />
            <Route path="/page/:id" element={<Page/>}/>
            <Route path="/p/:id" element={<Post/>}/>
            <Route path="/dashboard" element={
                loggedIn ? ( <Dashboard/>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/compose" element={
                loggedIn ? (  <>Compose</>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/edit" element={
                loggedIn ? (  <>Edit</>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route path="*" element={"<Error />"} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
