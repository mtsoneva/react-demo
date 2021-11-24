import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import './styles/App.scss';
import Product from './components/Product';
import { Routes, Route, Outlet } from 'react-router-dom';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/product/:sku" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
