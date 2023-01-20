import React from "react";
import storefront from "../assets/storefront.jpg";

function About() {
  return (
    <div className="about">
      <img className="storefront" src={storefront} alt="Store Front" />
      <div className="about-text">
        <h1>
          Family inclusive environment for Book lovers and Coffee fanatics
        </h1>
        <p>
          We are an independent, family run book store coffee shop with a
          passion for books, art, custom coffee blends, and our local community.
          Our goal is to have a shop where people feel comfortable bringing
          their children to. We provide a play space for kids to enjoy while you
          can sip some coffee, admire local art pieces and browse our book
          collection.
        </p>
      </div>
    </div>
  );
}

export default About;
