import React from "react";

import Style from "./about.module.css";
import img from "../../assets/About/Back.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section>
      <div className={` container ${Style.backGround} backGround`}>
        <Link to="/home">
          <img className={`${Style.back} back`} src={img} alt="" />
        </Link>

        <div className={`${Style.content} content`}>
          <h1 className={`${Style.title} title `}> About Us</h1>
          <p className={`${Style.isiContent} isiContent`}>
            More than 10 years, Arkademy Travel Services has grow at a steady pace and become one of Indonesia's leading travel agent offering a complete travel solution for both leisure and business travels. The company has over 500 staff
            within 24 branches across the country
          </p>
          <Link to="/destination">
            <button className={`  ${Style.btn1} btn1`}>Destination</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
