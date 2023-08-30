import React, { useState } from "react";
import "./Header.css";
import { Info } from "./Info";

function Header({ setOrigin, setDestination }) {
  const { dropdown, filtered_data } = Info();
  const [from, setFrom] = useState("BOM");
  const [to, setTo] = useState("CCU");

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 60,
          backgroundColor: "rgb(11, 158, 151)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", marginLeft: "20px", gap: 5 }}>
          <img
            className="image"
            src="https://media.licdn.com/dms/image/C4D0BAQGuP2rIUAPh9Q/company-logo_200_200/0/1646814442863?e=2147483647&v=beta&t=mzk6aGr_vjhSI_KJIBdoas04ScytTQnjW3wc2ao8Yq4"
          />
          <div style={{ marginTop: 7, letterSpacing: 5 }}>AERTRIP</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "115px",
              borderRadius: "25px",
              backgroundColor: "rgb(17, 226, 216)",
              fontSize: "16px",
            }}
          >
            FLIGHT
          </div>
          <div
            className="hoverEffect"
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "115px",
              borderRadius: "25px",
            }}
          >
            HOTEL
          </div>
          <div
            className="hoverEffect"
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "115px",
              borderRadius: "25px",
            }}
          >
            VISA
          </div>
          <div
            className="hoverEffect"
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "115px",
              borderRadius: "25px",
            }}
          >
            AI TRIP
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div
            className="hoverEffect"
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "40px",
              borderRadius: "25px",
            }}
          >
            O
          </div>
          <div
            className="hoverEffect"
            style={{
              fontSize: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "115px",
              borderRadius: "25px",
              marginRight: "20px",
            }}
          >
            LOGIN
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid white",
          paddingLeft: "50px",
          paddingRight: "50px",
          height: 130,
        }}
      >
        <div
          className="m"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "15px",
            marginTop: "25px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "40px", fontWeight: "normal" }}>
            <div>Oneway</div>
            <div>1 Passenger</div>
            <div>Economy</div>
          </div>
          <div>Recent Searches</div>
        </div>
        <div
          style={{
            display: "flex",
            height: 60,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="input">
            <input
              style={{ border: "none" }}
              list="dropdown"
              placeholder="From"
              onChange={(e) => {
                let str = e.target.value;
                setFrom(str.substring(0, 3));
              }}
            />
            <div>
              <datalist id="dropdown">
                {dropdown.map((op) => (
                  <option>{`${op.code} ${op.city}`}</option>
                ))}
              </datalist>
            </div>
          </div>

          <div className="input">
            <input
              style={{ border: "none" }}
              list="dropdown"
              placeholder="To"
              onChange={(e) => {
                let str = e.target.value;
                setTo(str.substring(0, 3));
              }}
            />
            <div>
              <datalist id="dropdown">
                {dropdown.map((op) => (
                  <option>{`${op.code} ${op.city}`}</option>
                ))}
              </datalist>
            </div>
          </div>
          <div>
            <input
              placeholder="Depart"
              type="date"
              style={{ border: "none" }}
            />
          </div>
          <div>
            <button
              className="clearButton"
              style={{
                width: "110px",
                height: "45px",
                borderRadius: "20px",
                color: " rgb(10, 166, 158)",
                backgroundColor: "white",
                border: "2px solid rgb(10, 166, 158)",
                fontWeight: "bold",
              }}
              onClick={() => {
                setOrigin(from);
                setDestination(to);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
