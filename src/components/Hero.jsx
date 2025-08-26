const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best and we are here to help you with our shoe.
          Your feet deserve the best and we are here to help you with our shoe.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Available only</p>
          <div className="brand-icons">
            <img src="../public/amazon.png"/>
            <img src="../public/flipkart.png"/>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="../public/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
