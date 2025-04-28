import React from "react";
import "./Front.css";

// Banner Images
import banner1 from "../assets/bannerr1.jpg";
import banner2 from "../assets/bannerr2.jpg";
import banner3 from "../assets/bannerr3.jpg";

// Category Images
import headphone from "../assets/headphone.jpg";
import tv from "../assets/tv.jpg";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import speaker from "../assets/speaker.jpg";
import accessory from "../assets/usb.jpg";
import sound from "../assets/sound.jpg";

// Deal Images
import dealImage from "../assets/bg-3.jpg";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import mouse from "../assets/mouse.jpg";
import watch2 from "../assets/watch2.jpg";

const Front = () => {
  const categories = [
    { name: "HeadPhone", count: 3, img: headphone },
    { name: "TV & AV", count: 2, img: tv },
    { name: "Smart Watches", count: 2, img: watch },
    { name: "Laptops", count: 3, img: laptop },
    { name: "Sound Devices", count: 1, img: sound },
    { name: "Accessories", count: 4, img: accessory },
    { name: "Speakers", count: 1, img: speaker },
  ];

  const products = [
    {
      img: phone1,
      tag: "HOT",
      category: "SmartPhone",
      title: "Anker PowerCore III Sense 18W 10000mAh",
      price: 350,
      rating: 4,
    },
    {
      img: mouse,
      category: "Accessories",
      title: "Logitech MK540 Wireless Mouse",
      price: 70,
      rating: 4,
    },
    {
      img: watch2,
      tag: "10% OFF",
      category: "Smart Watches",
      title: "Skill Star White Leather Smart Watch",
      price: 180,
      original: 200,
      rating: 3,
    },
    {
      img: phone2,
      tag: "HOT",
      discount: "16% OFF",
      category: "SmartPhone",
      title: "Right Check Standard Smart Phone",
      price: 210,
      original: 250,
      rating: 0,
    },
   
   
  ];
  const products1 = [
    {
      img: phone1,
      tag: "HOT",
      category: "SmartPhone",
      title: "Anker PowerCore III Sense 18W 10000mAh",
      price: 350,
      rating: 4,
    },
    {
      img: mouse,
      category: "Accessories",
      title: "Logitech MK540 Wireless Mouse",
      price: 70,
      rating: 4,
    },
    {
      img: watch2,
      tag: "10% OFF",
      category: "Smart Watches",
      title: "Skill Star White Leather Smart Watch",
      price: 180,
      original: 200,
      rating: 3,
    },
    {
      img: phone2,
      tag: "HOT",
      discount: "16% OFF",
      category: "SmartPhone",
      title: "Right Check Standard Smart Phone",
      price: 210,
      original: 250,
      rating: 0,
    },
    {
      img: phone1,
      tag: "HOT",
      category: "SmartPhone",
      title: "Anker PowerCore III Sense 18W 10000mAh",
      price: 350,
      rating: 4,
    },
    {
      img: mouse,
      category: "Accessories",
      title: "Logitech MK540 Wireless Mouse",
      price: 70,
      rating: 4,
    },
    {
      img: watch2,
      tag: "10% OFF",
      category: "Smart Watches",
      title: "Skill Star White Leather Smart Watch",
      price: 180,
      original: 200,
      rating: 3,
    },
    {
      img: phone2,
      tag: "HOT",
      discount: "16% OFF",
      category: "SmartPhone",
      title: "Right Check Standard Smart Phone",
      price: 210,
      original: 250,
      rating: 0,
    },
    {
      img: mouse,
      category: "Accessories",
      title: "Logitech MK540 Wireless Mouse",
      price: 70,
      rating: 4,
    },
    {
      img: watch2,
      tag: "10% OFF",
      category: "Smart Watches",
      title: "Skill Star White Leather Smart Watch",
      price: 180,
      original: 200,
      rating: 3,
    },
   
  ];

  return (
    <div className="front-page">
      {/* === Banner Section === */}
      <div className="hero-banner-section">
        <div className="large-banner">
          <img src={banner1} alt="Laptop Banner" />
          <div className="banner-content">
            <p className="tagline">UP TO 25% DISCOUNT</p>
            <h2>Great Deal Discount on all Laptops</h2>
            <p>Shop great deals on MacBook, iPad and more.</p>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="side-banners">
          <div className="small-banner orange">
            <img src={banner2} alt="Best Seller Headphone" />
            <div className="banner-content">
              <span className="label blue">BIG SALE</span>
              <h4>Best Seller Headphone</h4>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
          <div className="small-banner dark">
            <img src={banner3} alt="New Laptop Selection" />
            <div className="banner-content">
              <span className="label red">GOOD PRICE</span>
              <h4>New Laptop Selection</h4>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>

      {/* === Categories Section === */}
      <div className="popular-categories">
        <h2 className="section-title">Popular Categories</h2>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="category-image">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="category-info">
                <h4>{cat.name}</h4>
                <p>{cat.count} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Deal of the Day Section === */}
      <div className="deal-product-section">
        <div className="deal-box">
          <p className="deal-subtitle">ONLY FOR TODAY</p>
          <h2 className="deal-title">Deal of The Day</h2>
          <img src={dealImage} alt="Deal" className="deal-image" />
          <div className="countdown">
            <div className="time-box">
              <span>329</span>
              <p>Hrs</p>
            </div>
            <div className="time-box">
              <span>31</span>
              <p>Mins</p>
            </div>
            <div className="time-box">
              <span>28</span>
              <p>Secs</p>
            </div>
          </div>
        </div>

        <div className="product-cards">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-image">
                {product.tag && <span className="tag blue">{product.tag}</span>}
                {product.discount && <span className="tag red">{product.discount}</span>}
                <img src={product.img} alt={product.title} />
              </div>
              <p className="category">{product.category}</p>
              <h4 className="title">{product.title}</h4>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="price">
                ${product.price.toFixed(2)}
                {product.original && (
                  <span className="original">${product.original.toFixed(2)}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === Promo Banners === */}
      <div className="promo-banners">
        <div className="promo-card" style={{ backgroundColor: '#fda085' }}>
          <div className="promo-text">
            <h3>The Best Selling Gamemode</h3>
            <p>GIFT CARD $150</p>
          </div>
          <img src="/src/assets/controller.png" alt="Game Controller" />
        </div>
        <div className="promo-card" style={{ backgroundColor: '#1e293b' }}>
          <div className="promo-text light">
            <h3>Get Deal on Laptops</h3>
            <p>TODAY’S SUPER OFFER</p>
          </div>
          <img src="/src/assets/laptop.png" alt="Laptop" />
        </div>
        <div className="promo-card" style={{ backgroundColor: '#6366f1' }}>
          <div className="promo-text light">
            <h3>Samsung Smartphones</h3>
            <p>UP TO 45% OFF</p>
          </div>
          <img src="/src/assets/mobile.png" alt="Samsung Devices" />
        </div>
      </div>

      {/* === Scrolling Banner === */}
      <div className="scrolling-banner">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong>
          &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
          <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong>
          &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
          <strong>NO MINIMUM PURCHASE FREE SHIPPING ON ALL ORDERS</strong>
        </marquee>
      </div>

      {/* === Trending Products === */}
      <div className="trending-products-section">
        <h2>Trending Products</h2>
        <div className="trending-grid">
          {products1.map((item, i) => (
            <div key={i} className="trending-card">
              <div className="image-container">
                {item.discount && <span className="label red">{item.discount}</span>}
                {item.tag && <span className="label blue">{item.tag}</span>}
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info">
                <p className="category">{item.category}</p>
                <h4 className="title">{item.title}</h4>
                <div className="price">
                  ${item.price.toFixed(2)}
                  {item.original && (
                    <span className="original">${item.original.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="promo2-banners">
        <div className="promo2-card" style={{ backgroundColor: '#fda085' }}>
          <div className="promo2-text">
            <h3>The Best Selling Gamemode</h3>
            <p>GIFT CARD $150</p>
          </div>
          <img src="/src/assets/banner-4.jpg" alt="Game Controller" />
        </div>
        <div className="promo2-card" style={{ backgroundColor: '#1e293b' }}>
          <div className="promo2-text light">
            <h3>Get Deal on Laptops</h3>
            <p>TODAY’S SUPER OFFER</p>
          </div>
          <img src="/src/assets/banner-5.jpg" alt="Laptop" />
        </div>
        
      </div>
       {/* Trending Products Section */}
<div style={{ padding: '40px 80px' }}>
  <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' }}>
    Trending Products
  </h2>
  <div className="trendingg-products-grid">
    {[
      {
        title: 'Calvin Klein Black Leather...',
        category: 'Smart Watches',
        price: '$145.00–$160.00',
        rating: 2,
        image: 'src/assets/tv.jpg'
      },
      {
        title: 'Skill Star High Speed Mouse',
        category: 'Accessories',
        price: '$80.00',
        oldPrice: '$100.00',
        rating: 0,
        image: '../assets/laptop.jpg'
      },
      {
        title: 'Business High Speed Water...',
        category: 'Accessories',
        price: '$80.00',
        oldPrice: '$100.00',
        rating: 0,
        image: '../assets/laptop.jpg'
      },
      {
        title: 'Gucci Kingston HyperX Core',
        category: 'HeadPhone',
        price: '$250.00–$300.00',
        rating: 0,
        image: '../assets/laptop.jpg'
      },
      {
        title: 'Right Check Mobile Drum...',
        category: 'Speakers',
        price: '$74.55–$88.00',
        rating: 3,
        image: '/images/speaker.png'
      },
      {
        title: 'Still Star Home Sound Device',
        category: 'Sound Devices',
        price: '$250.00',
        rating: 0,
        image: '/images/washingmachine.png'
      },
      {
        title: 'Fechadura Smart de...',
        category: 'TV & AV',
        price: '$140.00–$200.00',
        rating: 0,
        image: '/images/pc.png'
      },
      {
        title: 'Armani Jeans Hight Quality...',
        category: 'TV & AV',
        price: '$400.00',
        rating: 0,
        image: '/images/tv.png'
      },
    ].map((product, index) => (
      <div key={index} className="product-card">
        <img src={product.image} alt={product.title} />
        <p className="product-category">{product.category}</p>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-rating">
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
          <span style={{ fontSize: '12px', marginLeft: 4 }}>(1)</span>
        </div>
        <p className="product-price">
          {product.price}
          {product.oldPrice && (
            <span className="product-old-price"> {product.oldPrice}</span>
          )}
        </p>
      </div>
    ))}
  </div>
</div>

{/* 50% OFF Promo Banner */}
<div className="promo-50-off">
  <img src="/src/assets/banner-6.jpg" alt="Speakers Promo" className="promo-bg-img" />
  <div className="promo-content">
    <div className="promo-text-area">
      <h3>50% OFF</h3>
      <p><strong>BIG SALE UP TO</strong></p>
    </div>
    <div className="promo-subtext">
      <p>IN ELECTRONICS STORE</p>
      <button>DISCOVER NOW</button>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Front;
