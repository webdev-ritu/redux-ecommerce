import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<ProductList/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/checkout" element = {<Checkout/>}/>
        <Route path = "/orderSuccess" element = {<OrderSuccess/>}/>
      </Routes>
    </Router>
  );
};
export default App;

