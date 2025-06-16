import { useNavigate } from "react-router-dom";
import { LogoContainer } from "../../ui/LogoContainer";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../context/AuthProvider";
import { type FormEvent } from "react";
import { Alert } from "../components/Alert";

export const SignUpPage = () => {
  const { signup, state, dispatch } = useAuth();
  const navigate = useNavigate();

  const { email, fullName, confirmPassword, password, onInputChange } = useForm(
    {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullName.trim().length < 4) {
      return dispatch({
        type: "ERROR",
        payload: "Full Name should be at least 3 characters long.",
      });
    }

    if (!validateEmail(email)) {
      return dispatch({ type: "ERROR", payload: "Email is not valid" });
    }
    if (password.length < 6) {
      dispatch({
        type: "ERROR",
        payload: "Password should be at least 6 characters long",
      });
    } else if (password !== confirmPassword) {
      dispatch({ type: "ERROR", payload: "Passwords do not match" });
    } else {
      signup(email, password, fullName);
    }
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

        {state.error && <Alert error={state.error} />}

        <input
          className="form-login__submit"
          // disabled={isAuthenticated}
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
