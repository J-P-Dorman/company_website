import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
