import React from "react";
import Style from "./reservation.module.css";
import img from "../../assets/About/Back.png";
import { Link } from "react-router-dom";

const ReservationContent = () => {
  return (
    <section>
      <div className={`container ${Style.backGround} backGround`}>
        <Link to="/home">
          <img className={`${Style.back} back`} src={img} alt="" />
        </Link>

        <div className={`${Style.content} content`}>
          <h1 className={`${Style.title} title`}>Reservation</h1>
          <div className={`${Style.form} form`}>
            <input className={`form-control ${Style.input1} input1`} type="text" placeholder="Input your name" />
            <input className={` form-control  ${Style.input1} input1`} type="text" placeholder="Input your email" />
            <div className={`${Style.doubleForm} doubleForm`}>
              <input className={`form-control mr-3 `} type="text" placeholder="Phone number" />
              <select className="form-control" placeholder="Select your nationality">
                <option>Select your nationality</option>
              </select>
            </div>
            <textarea className={`form-control ${Style.input1} input1`} placeholder="Explain about your trip" name="" id="" cols="30" rows="5"></textarea>
            <button className={`  ${Style.btn1} btn1`}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationContent;
