import { useNavigate } from "react-router-dom";
import { LogoContainer } from "../../ui/LogoContainer";
import { useForm } from "../../hooks/useForm";
import { useContext, type FormEvent } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Alert } from "../components/Alert";

export const LoginPage = () => {
  const autContext = useContext(AuthContext);
  if (!autContext) {
    throw new Error("No authcontext provided");
  }

  const navigate = useNavigate();
  const { state, login } = autContext;

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

        {state.error && <Alert error={state.error} />}

        <input className="form-login__submit" type="submit" value={`Sign In`} />
        <p className="form__signup">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};
