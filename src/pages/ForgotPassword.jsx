import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email required")
});

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // replace with API call to send reset link
    alert("Password reset link sent to: " + data.email);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box single">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Email" {...register("email")} className="input" />
          {errors.email && <div className="err">{errors.email.message}</div>}
          <br></br>
          <button className="primary" type="submit">Send Link</button>
        </form>
        <p className="small">Back to <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
