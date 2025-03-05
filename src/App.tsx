import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {


  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
