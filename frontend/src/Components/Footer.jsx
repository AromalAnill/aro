import React from 'react'

const Footer = () => {
  return (
    <div>
   

<footer>
        <div class="footer-container">
            <div class="footer-section about">
                <h2>About Us</h2>
                <p>We are a leading eCommerce platform, providing the best online shopping experience with a wide range of products.</p>
            </div>

            <div class="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    
                </ul>
                <div className='footer-but'>
                  <button><a href="./log">SignUp</a></button>
                 
                  </div>
            </div>

            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: aromal@gmail.com</p>
                <p>Phone: 0000000000</p>
                <div class="socials">
              
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
                </div>
            </div>
        </div>

        {/* <div class="footer-bottom">
               ecommerce website
        </div> */}
    </footer>
    </div>
  )
}

export default Footer
