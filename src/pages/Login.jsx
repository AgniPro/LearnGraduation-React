import React from "react";
function Login(props){
    return(
     <><div className="login">
     <label htmlFor="email">Email</label>
     <input
       type="email"
       id="email"
       className="form-control"
       name="username"
     />
     <label htmlFor="password">Password</label>
     <input
       type="password"
       id="password"
       className="form-control"
       name="password"
     />
     <button onClick={props.login}>Log in</button>
   </div>
   <button className="btn" onClick={props.googlelogin}>Sign in with Google</button></>
    );
}
export default Login;