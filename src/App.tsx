import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.scss";
import Home from "./pages/Home/Home";
import MyAccount from "./pages/MyAccount/MyAccount";
import { useAuthCheckQuery } from "./redux/services/core/core";
import { RootState } from "./redux/store";
import { decodeString } from "./utils";

const App = () => {
  // Store data
  // ========================================
  const authToken =
    decodeString(
      useSelector((state: RootState) => state.authentication.token)
    ) ?? "";
  // ==========

  // Api Queries
  // ========================================
  const { data: authCheckData } = useAuthCheckQuery(authToken);
  const isAuthenticated = authCheckData?.authenticated ?? false;
  // ==========

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuthenticated && (
          <>
            <Route path="/my-account" element={<MyAccount />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
