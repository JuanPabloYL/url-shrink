import { useNavigate } from "react-router-dom";
import { LogoContainer } from "../../ui/LogoContainer";
import { useForm } from "../../hooks/useForm";
import { AuthContext, useAuth } from "../context/AuthProvider";
import { useContext, useMemo, type FormEvent } from "react";

export const SignUpPage = () => {
  const { state } = useContext(AuthContext);

  const { user, loading } = state;

  const { email, fullName, confirmPassword, password, onInputChange } = useForm(
    {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const { signup } = useAuth();
  const isAuthenticated = useMemo(() => loading === false, [loading]);

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password, fullName);
    console.log({ email, password });
  };

  return (
    <div className="login">
      <LogoContainer />
      <p className="login-intro">Advanced URL Management Platform</p>

      <form className="form-login" onSubmit={onSubmit}>
        <h2>Welcome Back</h2>
        <p className="form-login__intro">
          Sign in to manage your shortened links.
        </p>

        <div className="form-login__inputs">
          <input
            type="text"
            placeholder="Enter your Full Name"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
          />

          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onInputChange}
          />
        </div>

        <input
          className="form-login__submit"
          disabled={isAuthenticated}
          type="submit"
          value={`Sign Up`}
        />
        <p className="form__signup">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign In</span>
        </p>
      </form>
    </div>
  );
};
