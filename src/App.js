import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Routes/Home";
import { Contact } from "./Routes/Contact";
import { Cart } from "./Routes/Cart";
import { Products } from "./Routes/Products";
import   Login  from "./Routes/Login";
function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      }
    </div>
  );
}

export default App;
