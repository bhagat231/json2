import './App.css';
import Home from './Comp/Home';
import Navbar from './Comp/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Products from './Comp/Products';
import Product from './Comp/Product';
import About from './Comp/About';
import Contact from './Comp/Contact';


function App() {
  return (
  <>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      
    
      </Routes>
  </>
  );
}


export default App;
