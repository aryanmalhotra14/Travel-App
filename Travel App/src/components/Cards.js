import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Some Of The Best Packages We Offer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ladakh.jpg"
              text="Ladakh- Visit the world's highest saltwater lake Pangong Tso"
              label="Adventure Package"
              price="Starting from ₹40k"
              path="/services"
            />
            <CardItem
              src="images/jaipur.jpeg"
              text="Jaipur- Explore the wide streets of the Pink City"
              label="Luxury Package"
              price="Starting from ₹30k"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/go.jpg"
              text="Goa- Enjoy these exciting rides on the private beaches available for you"
              label="Adventure Package"
              price="Starting from ₹20k"
              path="/services"
            />
            <CardItem
              src="images/kol.jpg"
              text="Kolkata- Visit the City of Joy to explore more of its cultural heritage"
              label="Cultural Tourism Package"
              price="Starting from ₹15k"
              path="/products"
            />
            <CardItem
              src="images/sri.jpg"
              text="Srinagar- Engulf yourself in local culture by  renting a shikara for a daytime cruise"
              label="Luxury Package"
              price="Starting from ₹23k"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/su.jpg"
              text="Sundarbans- For all the wildlife enthusiasts, explore the national park and tiger reserve in West Bengal"
              label="Wildlife Tourism Package"
              price="Starting from ₹10k"
              path="/services"
            />
            <CardItem
              src="images/sik.png"
              text="Sikkim- Come take a look at the fascinating Himalayas including many snow covered mountain peaks"
              label="Cultural Tourism Package"
              price="Starting from ₹12k"
              path="/products"
            />
            <CardItem
              src="images/gate.jpg"
              text="Mumbai- Explore the chaotic streets of this entertainment capital, also known as the City of Dreams"
              label="Luxury Package"
              price="Starting from ₹20k"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
