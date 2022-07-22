
import React from 'react';
import './signin.css';


const SigninForm =()=>{
    return(
        <>
        <div className="form-group">
            <div className="form">
                <h1>Sign In as User</h1>
                <div className="textbox">
                <span className="fa fa-user" aria-hidden="true"></span>
                    <input type="text" className="form-control" placeholder="Username"/> 
                </div>

                <div className="textbox space">
                <span className="fa fa-lock" aria-hidden="true"></span>
                    <input type="password" className="form-control" placeholder="Password"/> 
                </div>

                <button type="submit" className="btn">LOGIN</button>
                <p>Or Sign in using social platforms</p>
                <div className="social-platforms">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-google" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                <p>Or You are an admin?<a href="#">Signin as admin instead?</a></p>
            </div>
        </div>
        </>
    )
}
export default SigninForm;

