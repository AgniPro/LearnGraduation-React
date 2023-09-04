import React from "react";
function Login(props){
    return(
     <><div style={{padding:"24px"}} className="widget">
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
     <button className="dlBox fT" onClick={props.login}>Log in</button>
   </div>
   <button className="dlBox fT" style={{height:"24px",padding:"24px",margin:"64px 0 0 64px"}} onClick={props.googlelogin}>Sign in with Google</button></>
    );
}
export default Login;