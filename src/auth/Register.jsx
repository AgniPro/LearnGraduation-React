import React from "react";
import { Helmet } from "react-helmet";
function Register(props){
    return(
     <>
     <Helmet>
      <title>Register || LearnGradution</title>
     </Helmet>
     <div style={{padding:"24px"}} className="widget">
     <label htmlFor="email" >Email</label>
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
     <button className="dlBox fT" type="submit" onClick={props.register}>Register</button>
   </div>
   <button className="dlBox fT" style={{height:"24px",padding:"24px",margin:"64px 0 0 64px"}} type="button" onClick={props.googlelogin}><svg _ngcontent-xuc-c62="" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path _ngcontent-xuc-c62="" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> Sign up with Google</button>
   </>
    );
}
export default Register;