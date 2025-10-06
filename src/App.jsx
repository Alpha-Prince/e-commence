import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import Product from './Pages/Product.jsx';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_img from './assets/mens-banner-img.png';
import women_img from './assets/women-banner-img.png';
import kid_img from './assets/kids-banner-img.png';


function App() {

  return (
    <div>
      {/* Remove <BrowserRouter> and its closing tag */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory image={men_img} category='mens' />} />
        <Route path='/womens' element={<ShopCategory image={women_img} category='womens' />} />
        <Route path='/kids' element={<ShopCategory image={kid_img} category='kids' />} />
        <Route path='/product/:productId?' element={<Product />} /> {/* Fix the Product route again */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
