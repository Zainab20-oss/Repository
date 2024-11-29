import React from "react";
import headphone from './headphone.png'
import "./Card.css";
function Contenu(){
    return(
      <main>
        <div>Nearest Seller</div>
        <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
        </div>
      </main>)
}
function Card(){
    return(
       <div className="cards-container">
         <div className="product-card">
            <div className="nearest-seller">Nearest Seller</div>
            <img
                className="product-image"
                src={headphone}
                alt="Wireless Bluetooth Headset"
            />
            <div className="product-name">Wireless bluetooth headset</div>
            <div className="shipping-info">Shipped in 3-4 days</div>
            <div className="product-price">$35.99</div>
            <div className="button-group">
                <button className="add-cart-btn">Add Cart</button>
                <button className="buy-btn">Buy</button>
            </div>
        </div>

       </div>
    );
}
export default Contenu;