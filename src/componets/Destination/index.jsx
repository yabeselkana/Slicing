import React from "react";
import Style from "./destination.module.css";
import { Link } from "react-router-dom";
import img from "../../assets/About/Back.png";
import img1 from "../../assets/Destination/uluatu.png";
import img2 from "../../assets/Destination/ubut.png";
import img3 from "../../assets/Destination/gwk.png";

function ConentDestination() {
  return (
    <section>
      <div className={` container ${Style.backGround} backGround`}>
        <Link to="/about">
          <img className={`${Style.back} back`} src={img} alt="" />
        </Link>

        <div className={`${Style.content} content`}>
          <h1 className={`${Style.title} title `}> Destination</h1>
          <div className={`${Style.destination} destination`}>
            <div className={`${Style.cover} cover`}>
              <img className={`${Style.gbr1} gbr1`} src={img1} alt="" />
              <h3 className={`${Style.title1} title1`}>Uluatu</h3>
            </div>
            <div className={`${Style.cover} cover`}>
              <img className={`${Style.gbr1} gbr1`} src={img2} alt="" />
              <h3 className={`${Style.title1} title1`}>Ubut</h3>
            </div>
            <div className={`${Style.cover} cover`}>
              <img className={`${Style.gbr1} gbr1`} src={img3} alt="" />
              <h3 className={`${Style.title1} title1`}>GWK</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConentDestination;
