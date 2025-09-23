import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation";
import { Link, useNavigate } from "react-router-dom";

export default function LoginTemplate({ title = "User", accentColor = "#2ecc71" }) {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  // Default email from localStorage if "remember me" was used
  const defaultEmail = localStorage.getItem("rememberedEmail") || "";

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: defaultEmail, password: "" }
  });

  const onSubmit = (data) => {
    // Demo behaviour: save remembered email & simulate a login token
    if (data.remember) {
      localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    // Simulate success (replace this with real API call)
    localStorage.setItem("authToken", "fake-token-for-demo");
    alert(`${title} logged in:\n` + JSON.stringify({ email: data.email }, null, 2));
    // navigate somewhere on success: navigate("/dashboard") -- add route if you implement it
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="left">
          <div className="logo">Calarity</div>
          <h2>Welcome {title}!</h2>
          <p className="sub">Sign in by entering the information below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input placeholder="Email" {...register("email")} className={errors.email ? "input error" : "text"} />
            {errors.email && <div className="err">{errors.email.message}</div>}

            <div className="pwd-field">
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className={errors.password ? "input error" : "password"}
              />
              <button
                type="button"
                className="eye-btn"
                aria-label="Toggle password visibility"
                onClick={() => setShowPwd(s => !s)}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <div className="err">{errors.password.message}</div>}

            <div className="row between">
              <label className="remember">
                <input type="checkbox" {...register("remember")} /> Remember me
              </label>
              <button type="button" className="link" onClick={() => navigate("/forgot")}>Forgot password?</button>
            </div>

            <button type="submit" className="primary" style={{ backgroundColor: accentColor }}>
              Sign in
            </button>
          </form>

          <p className="small">
            Don't have an account? <Link to="/register" className="link-inline">Create one here.</Link>
          </p>

          <div className="socials">
            <a href="#" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="linkedin"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="right">
          {/* Replace with your real illustration or image */}
          <div className="illustration">
            can put <img src="/login-image.png" alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}
