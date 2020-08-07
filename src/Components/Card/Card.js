import React from "react";
import {
  ChevronDoubleDown,
  CartPlus,
  ChevronRight,
} from "react-bootstrap-icons";

import "./Card.css";
import sbimf from "../../assets/sbimf.png";
import img2 from "../../assets/increasing.png";

const Card = (props) => {
  let cardID = props.cardID;
  let dataTarget = "#" + cardID;

  return (
    <div className="col-auto">
      <div className="card card-custom mb-3 shadow mb-3 bg-white col-lg-6 col-sm-12">
        <div className="row">
          <div className="col-2">
            <img className="card-img" src={sbimf} alt="mf logo" />
          </div>
          <div className="col-8 card-content">
            <h5 className="row card-custom-title">{props.name}</h5>
            <p className="row card-custom-desc">{props.fundType}</p>
          </div>
          <div className="col-1">
            <ChevronRight className="vertical-center-icon" size={20} />
          </div>
        </div>
        <div className="row">
          <div className="collapse" id={cardID}>
            <div className="card inner-card">
              <div className="row">
                <div className="col-2">
                  <img
                    className="card-img collapse-image"
                    src={img2}
                    alt="mf logo"
                  />
                </div>
                <div className="col-10">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-4 collapse-div">
                      <p className="collapse-metrics">
                        Average 3Y Rolling Return
                      </p>
                      <p className="collapse-figure">{`${props.avg3YReturn}%`}</p>
                    </div>
                    <div className="col-4 collapse-div">
                      <p className="collapse-metrics">3Y Standard Deviation</p>
                      <p className="collapse-figure">9.1%</p>
                    </div>
                    <div className="col-4 collapse-div">
                      <p className="collapse-metrics">
                        1Y
                        <br />
                        Return
                      </p>
                      <p className="collapse-figure">{`${props.oneYearReturn}%`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            className="btn card-custom-btn btn-light"
            type="button"
            data-toggle="collapse"
            data-target={dataTarget}
            aria-expanded="false"
            aria-controls="collapseExample"
            // style={{ marginLeft: "12px" }}
          >
            <div className="btn-text-with-icon">
              <p className="btn-text">Show Performance Details</p>
              <ChevronDoubleDown className="push-right" />
            </div>
          </button>
          <button
            className="card-custom-btn btn btn-info"
            type="button"
            // style={{ marginRight: "12px" }}
          >
            <div className="btn-text-with-icon">
              <CartPlus className="push-left" size={18} />
              <p className="btn-text">Invest Now</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
