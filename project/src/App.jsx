import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartContext
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Front from './components/Front';
import About from './components/About';
import Shop from './components/shop';
import News from './components/News';
import Contact from './components/Contact';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <CartProvider>  {/* Context Provider to manage cart state */}
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '20px' }}>
        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
