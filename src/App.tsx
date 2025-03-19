import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Home from "./pages/Home/Home";
import { store } from "./redux/store";
import MyAccount from "./pages/MyAccount/MyAccount";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
