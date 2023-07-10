import { createContext } from 'react';

export const ThemeContext = createContext('dark');

export const api ="http://localhost:3000";

export const DarkMode = () => {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"),
        "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainCont").classList.add(
            "drK") : document.querySelector("#mainCont").classList.remove("drK")
  };

export const handleLogin = async (setLoggedIn,setCookie) => {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch(api+"/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setLoggedIn(data.loggedIn);
    setCookie('refreshToken', data.refreshToken, { path: '/' , expires: new Date(Date.now() + 24*60*60*1000),secure:true , sameSite:"none",domain:".learngraduation.onrender.com",httpOnly:true});
    setCookie('accessToken', data.accessToken, { path: '/' , expires: new Date(Date.now() + 60*60*1000),secure:true , sameSite:"none",domain:".learngraduation.onrender.com",httpOnly:true});
    
  };

export const handleGoogleLogin = () => {
    window.location.assign(api+"/auth/google");
  };
  

export const date=(pdate,udate)=> {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (pdate.toString() === udate.toString()) {
        fdate= pdate; pubinfo= "publish :";
    }else{
        fdate=udate; pubinfo ="updated :"
    }
    var fdate ; var pubinfo ;
    var date = new Date(fdate);
    return date = pubinfo + " " + date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
};