import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="icon_clock" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum color sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon_teamwork" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum color sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon_diaphragm" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum color sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon_money" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum color sit amet.</p>
          </div>
        </div>
        <div className="image">
          <img src={home2} alt="computer_screen" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
