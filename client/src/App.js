import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ProductHome from "./pages/product/ProductHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/test" element={<test/>}/>
        <Route path="/products" element={<ProductHome/>}/>
      </Routes>
    </div>
  );
}

export default App;
