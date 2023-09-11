
export const api = "http://localhost:3000";

export const DarkMode = () => {
  localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"),
    "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainCont").classList.add(
      "drK") : document.querySelector("#mainCont").classList.remove("drK")
};

export const handleLogin = async (setLoggedIn, setCookie, cookies, setstatusCode, setMessage, setuser) => {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(api + "/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json", "refreshToken": cookies.refreshToken
    },
    withCredentials: true,
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  setLoggedIn(data.loggedIn);
  setuser(data.user);
  setstatusCode(response.status);
  setMessage(data.message || "...");
  setCookie('refreshToken', data.refreshToken, { path: '/', expires: new Date(Date.now() + 24 * 60 * 60 * 1000), secure: true, sameSite: "none" });
  setCookie('accessToken', data.accessToken, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000), secure: true, sameSite: "none" });
};
export const register = async (setstatusCode, setMessage) => {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(api + "/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  setstatusCode(response.status);
  setMessage(data.message || "...");
  if (response.status === 200) {
    window.location.replace('/login');
  }
};

export const handleGoogleLogin = () => {
  window.location.assign(api + "/auth/google");
};

export const date = (pdate, udate) => {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var fdate, pubinfo;
  if (pdate && udate) {
    if (pdate.toString() === udate.toString()) {
      fdate = pdate;
      pubinfo = "Publish:";
    } else {
      fdate = udate;
      pubinfo = "Updated:";
    }
    var date = new Date(fdate);
    return { "pubinfo": pubinfo, "month": `${months[date.getMonth()]} ${date.getDate()}`, "year": date.getFullYear() };
  } else {
    return { "pubinfo": 0, "month": 0, "year": 0 };
  }

};
