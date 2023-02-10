import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./AppStyles.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/sobre" />
        <Route element={<Services />} path="/servicos" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
