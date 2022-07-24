import React from "react";
import "./signin.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const baseURL = "http://localhost:8000/auth/login";
const onSubmit = (data:any) => {
  console.log(data);
  axios
  .post(baseURL, {
    email: data.username,
    password: data.password
  })
  .then((response) => {
    console.log(response);
  });


}
const SigninForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group" >
        <div className="form">
          <h1>Sign In as User</h1>
          <div className="textbox">
            <span className="fa fa-user" aria-hidden="true"></span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: true , pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }})}
            />
            
          </div>
          {errors.email && <span className="error">Email is required</span>}
          <div className="textbox space">
            <span className="fa fa-lock" aria-hidden="true"></span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", {required: true,
              minLength: {
                value: 5,
                message: "min length is 5"
              }})}
            />
           
          </div>
          {errors.password && <span className="error">Password is required</span>}
          <div className="textbox-btn">
          <button type="submit"  className="btn-login">LOGIN</button>
          </div>
          
         
          <p>Or Sign in using social platforms</p>
          <div className="social-platforms">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-google" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </div>
          <p>
            Or You are an admin?<a href="#">Signin as admin instead?</a>
          </p>
        </div>
      </div>
    </form>
     
    </>
  );
};
export default SigninForm;
