import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { Dashboard } from "../app/components/Dashboard";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
