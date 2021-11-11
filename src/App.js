import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import './styles/App.scss';
import Product from './components/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/product/:sku" component={Product} />
      <Route path="/cart" component={Cart} />
      <Route path="/" exact component={HomePage} />
      <ToastContainer />
    </Router>
  );
}

export default App;
