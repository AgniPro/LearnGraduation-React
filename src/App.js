import React, { useEffect } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import Menu from "./component/Menu";
import BlogHm from "./pages/BlogHm";
import Login from "./pages/Login";
import {
  DarkMode,
  api,
  ThemeContext,
  handleLogin,
  handleGoogleLogin,
} from "./Contexts";
import Post from "./pages/Post";
import Page from "./pages/Page";

function App() {
  const [theme, setTheme] = useState("light");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(api + "/check-auth", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLoggedIn(data.authenticated);
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch(api+"/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoggedIn(false);
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
                      login={handleLogin}
                      googlelogin={handleGoogleLogin}
                    />
                )
              }
            />
            <Route path="/page/:id" element={<Page/>}/>
            <Route path="/p/:id" element={<Post/>}/>

            <Route path="*" element={"<Error />"} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
