// import amazon from "../assets/amazon.png";
// import flipkart from "../assets/flipkart.png";
// import heroImage from "../assets/hero-image.png";

// const Hero = () => {
//   return (
//     <div className="hero container">
//       <div className="hero-content">
//         <h1>YOUR FEET DESERVE THE BEST</h1>
//         <p>
//           Your feet deserve the best and we are here to help you with our shoe.
//           Your feet deserve the best and we are here to help you with our shoe.
//         </p>

//         <div className="hero-btn">
//           <button>Shop Now</button>
//           <button className="sec-btn">Category</button>
//         </div>

//         <div className="shopping">
//           <p>Available only</p>
//           <div className="brand-icons">
//             <img src={amazon} alt="Amazon" />
//             <img src={flipkart} alt="Flipkart" />
//           </div>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img src={heroImage} alt="Hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;



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
            <img src="/vite-project/amazon.png" alt="Amazon" />
            <img src="/vite-project/flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/vite-project/hero-image.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;

