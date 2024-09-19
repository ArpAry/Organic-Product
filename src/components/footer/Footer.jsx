import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-head">
        <div className="left-foot">
          <div>
            <img
              className="store-img"
              src={
                "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png"
              }
              alt="132"
            />
          </div>
          <div>
            <h3 className="footer-text">
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
              Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
              quis faucibus urna. Suspendisse pellentesque.
            </h3>
          </div>
        </div>
        <div className="mid-foot">
          <div>
            <div>
              <h2 className="links1"> QuickLinks</h2>
              <ul>
                <li>About</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Contact</li>
                <li>Home</li>
                <li>My account</li>
                <li>Shop</li>
              </ul>
            </div>

            <div>
              <h2 className="link2">SiteLinks</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Shipping Details</li>
                <li>Offer Coupons</li>
                <li>Term and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-foot">
          <div>
            <div>
              <h2 className="link4"> Download Our Mobile App</h2>
            </div>
            <div>
              <p className="download-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam gravida sollicitudin. Praesent porta enim mi, non
                tincidunt libero interdum sit amet.
              </p>
            </div>
            <div>
              <div>
                <h2 className="link4">Quick Links</h2>
              </div>
              <div>
                <ul>
                  <li>Know More About Us</li>
                  <li>Visit Store</li>
                  <li>Lets Connect</li>
                  <li>Locate Stores</li>
                </ul>
              </div>
              <div className="download">
                <div>
                  <img
                    className="img-d"
                    src={
                      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png"
                    }
                    alt="132"
                  />
                </div>

                <div>
                  <img
                    className="img-d"
                    src={
                      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png"
                    }
                    alt="132"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
