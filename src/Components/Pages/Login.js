import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../Common/common";
import { useAuth } from "../../Context/Auth";

export default function Login() {
  const navigate = useNavigate();

  const { onLogin } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  const onChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password) {
      alert("Please enter email and password ");
      return;
    } else {
      const isUser = onLogin(email, password);
      if (isUser && isUser.id) {
        if (isUser.role === "admin") {
          navigate(appRoutes.ADMIN_DASHBOARD);
        } else {
          navigate(appRoutes.HOME);
        }
      } else {
        alert("Entered email and password does not match");
      }
    }
  };
  return (
    <div>
      <main className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={onChange}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
    </div>
  );
}
