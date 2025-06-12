import { useNavigate } from "react-router-dom";
import { LogoContainer } from "../../ui/LogoContainer";
import { useForm } from "../../hooks/useForm";
import { useContext, type FormEvent } from "react";
import { AuthContext } from "../context/AuthProvider";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
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
        </div>

        <input className="form-login__submit" type="submit" value={`Sign In`} />
        <p className="form__signup">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};
