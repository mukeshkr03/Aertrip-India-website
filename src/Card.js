import React from "react";
import { Info } from "./Info";
import "./Card.css";

function Card({
  flightName,
  dispatchTime,
  from,
  duration,
  flightLogo,
  arrivalTime,
  to,
  price,
}) {
  const { dropdown, filtered_data } = Info();
  console.log(filtered_data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120px",
        paddingLeft: "50px",
        paddingRight: "50px",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120px",
          paddingLeft: "50px",
          paddingRight: "50px",
          justifyContent: "space-between",
        }}
      >
        <div className="first" style={{ display: "flex", gap: "20px" }}>
          <div className="logo">✈️</div>
          <div className="flightName">IndiGo</div>
        </div>
        <div className="second" style={{ display: "flex", gap: "20px" }}>
          <div>
            <div className="dispatchTime">{dispatchTime}</div>
            <div className="from">{from}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="duration">
              {Math.ceil(duration / 3600)}h {duration % 55}m
            </div>
            <div className="flightLogo">
              ...............................................................
            </div>
          </div>
          <div>
            <div className="arrivalTime">{arrivalTime}</div>
            <div className="to">{to}</div>
          </div>
        </div>
        <div className="third" style={{ display: "flex", gap: "20px" }}>
          <div className="price">₹{price}</div>
          <div className="button">
            <button
              className="clearButton"
              style={{
                width: "110px",
                height: "37px",
                borderRadius: "20px",
                color: " rgb(10, 166, 158)",
                backgroundColor: "white",
                border: "2px solid rgb(10, 166, 158)",
                fontWeight: "bold",
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
