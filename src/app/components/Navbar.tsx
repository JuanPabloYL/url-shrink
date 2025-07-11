import { useContext } from "react";
import { LogoContainer } from "../../ui/LogoContainer";
import { AuthContext } from "../../auth/context/AuthProvider";

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is not available");
  }

  const { state, startLogOut } = authContext;

  const { user } = state;
  if (!user) {
    throw new Error("User not provided");
  }

  const onLogOut = () => {
    startLogOut();
  };

  return (
    <div className="navigation-container">
      <div className="navigation container">
        <LogoContainer />

        <div className="navigation__user">
          <div className="navigation__user-logo">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            <span className="navigation__welcome">
              Welcome, {user.displayName}
            </span>
          </div>
          <button className="navigation__signout" onClick={onLogOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
