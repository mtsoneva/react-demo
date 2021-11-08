import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import './styles/App.scss';
import Product from './components/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "react-image-gallery/styles/scss/image-gallery.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/product/:sku" component={Product} />
      <Route path="/" exact component={HomePage} />
    </Router>
  );
}

export default App;
