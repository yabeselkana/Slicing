import React from "react";

import Style from "./backGround.module.css";
import img from "../../assets/carousel/IconBali.png";
import img2 from "../../assets/carousel/A Better way to Travel to Bali.png";
import img3 from "../../assets/carousel/About Us.png";
import img4 from "../../assets/carousel/Reservation.png";
import { Link } from "react-router-dom";

const BackGround = () => {
  return (
    <section>
      <div div className={` container ${Style.backGround} backGround`}>
        <div className={`${Style.logo} logo`}>
          <img className={`${Style.icon} icon`} src={img} alt="" />
          <img src={img2} alt="" />
          <div className={`${Style.gabBtn} gabBtn`}>
            <Link to="/about">
              <button className={`${Style.btn1} btn1`}>
                <img src={img3} alt="" />
              </button>
            </Link>
            <Link to="/reservation">
              <button className={`${Style.btn2} btn2`}>
                <img src={img4} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackGround;
