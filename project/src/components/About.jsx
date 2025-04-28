import React from 'react'
import './About.css'
import  reviewsData from '../data/reviewsData'

export const About = () => {
  return (
    <div className='about-container'>
        <div className='about-content'>
            <div className='about-card'>
                <img src="/src/assets/about-1.jpg" alt="about" />
                <h2>About Us</h2>
                <p>Facilisi nullam vehicula ipsum a arcu cursus vitae congue.<br/> Pretium quam vulputate dignissim suspendisse in est. Sit<br/> amet consectetur adipiscing elit ut aliquam purus sit.<br/> Porttitor rhoncus dolor.</p>
            </div>
        </div>

        <div className='text-image-section'>
            <div className='text-side'>
                <h6>WE ARE IMPORTANT</h6>
                <h4>Strong Together</h4>
                <p>Nibh ipsum consequat nisl vel. Non arcu risus quis varius quam<br/> quisqu diam vel. Eu turpis egestas pretium aenean pharetra magna<br/> ac placerat vestibulum. Amet dictum sit amet justo donen ante met</p>
                <button>CONTACT US</button>
            </div>

            <div className='image-side'>
                <img src="/src/assets/about-2.jpg" alt="about" />
            </div>

        </div>

        <hr className="border-dark my-5 mx-auto" style={{ width: '1400px'}}/>
        
        <div className='video-section'>
            <div className='video-left'>
                <div className='video-container'>
                <img src="/src/assets/about-3.jpg" alt="play" className='video-thumbnail' />
                <div className='play-icon' onClick={() => window.open("https://www.youtube.com/embed/XHOmBV4js_E?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0", "_blank")}>
                    ▶
                </div>
                </div>
            </div>

            <div className='video-right'>
                <h6>BUY FROM EXPERTS</h6>
                <h2>15 Years of Experience</h2>
                <p>
                    Nibh ipsum consequat nisl vel. Non arcu risus quis pretiumvari<br/>
                    mquistopm diam pretium vel. Eu turpis egestas pretium aenean<br/>
                    pharetra lihcerats Tellus rutrum tellus pellentesque eu tinctpell and <br/>wretium entes wtincdur Westibulum hmet dictum sit amdone.
                </p>
                <button>BUY PRODUCTS</button>
            </div>
        </div>

        <div className="brand-banner">
            <div className="brand-content">
                <img src="/src/assets/brand-1.png" alt="Brand" className="brand-image" />
                <img src="/src/assets/brand-2.png" alt="Brand" className="brand-image" />
                <img src="/src/assets/brand-3.png" alt="Brand" className="brand-image" />
                <img src="/src/assets/brand-4.png" alt="Brand" className="brand-image" />                    
                <img src="/src/assets/brand-5.png" alt="Brand" className="brand-image" />
                <img src="/src/assets/brand-6.png" alt="Brand" className="brand-image" />
            </div>
        </div>

        <div className="review-cards-section">
            <div className='review-heading-row'>
                <h2 className="review-heading">Customer Reviews</h2>
                <a href="#" className="review-link">BUY PRODUCTS </a>
            </div>
            <div className="review-cards-container">
                {reviewsData.map((review, index) => (
                <div className="review-card-box" key={index}>
                   <div className="review-top-row">
                        <img src={review.image} alt={review.name} className="review-img" />
                        <div className="review-info">
                            <div className="review-stars">
                                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                            </div>
                            <h5 className="review-name">{review.name}</h5>
                            <span className="review-role">{review.role}</span>
                        </div>
                    </div>
                    <p className="review-text">{review.review}</p>
                </div>
                ))}
            </div>
        </div>

        <div className='about-last'>
            <div className='last-card'>
                <img src="/src/assets/about-4.jpg" alt="about" />
                <h3>
                The most important advantage of working with an<br/> experienced specialist is time saving, do not eliminate it!</h3>
            </div>
        </div>

        <div class="icon-info-section">
            <div class="icon-info-box">
                <i class="fas fa-shipping-fast"></i>
                <div>
                <h4>Free Shipping</h4>
                <p>Free Shipping for orders over $120</p>
                </div>
            </div>

        <div class="icon-info-box">
            <i class="fas fa-hand-holding-usd"></i>
            <div>
                <h4>Money Guarantee</h4>
                <p>Within 40 days for an exchange</p>
            </div>
        </div>

        <div class="icon-info-box">
            <i class="fa-regular fa-credit-card"></i>
            <div>
                <h4>Flexible Payment</h4>
                <p>Pay with Multiple Credit Cards</p>
            </div>
        </div>

        <div class="icon-info-box">
            <i class="fas fa-headset"></i>
            <div>
                <h4>Online Support</h4>
                <p>24 hour a day, 7 days a week</p>
            </div>
        </div>
        </div>


    </div>
  )
}

export default About;