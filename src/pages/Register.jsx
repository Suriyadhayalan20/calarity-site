import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().min(6, "At least 6 characters").required("Password required"),
  confirm: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
});

export default function Register() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert("Registered: " + data.email);
    navigate("/"); // go to doctor login by default, or change
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box single">
        <h2>Create account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Email" {...register("email")} className="input" />
          {errors.email && <div className="err">{errors.email.message}</div>}

          <div className="pwd-field">
            <input type={showPwd ? "text" : "password"} placeholder="Password" {...register("password")} className="input" />
            <button type="button" className="eye-btn" onClick={() => setShowPwd(s => !s)}>{showPwd ? "🙈" : "👁️"}</button>
          </div>
          {errors.password && <div className="err">{errors.password.message}</div>}

          <input type="password" placeholder="Confirm password" {...register("confirm")} className="input" />
          {errors.confirm && <div className="err">{errors.confirm.message}</div>}
          <br></br>
          <button className="primary" type="submit">Sign up</button>
        </form>

        <p className="small">Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
