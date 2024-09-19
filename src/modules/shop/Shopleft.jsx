import "./Shopleft.css";
import { Slider } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { DataContext } from "../../components/DataProvider";
import TwoWaySlider from "./TwoWaySlider";
const Shopleft = () => {
  const data2 = useContext(DataContext);

  console.log(data2);
  return (
    <div className="shop-left">
      <div className="input-div">
        <input
          className="input-field"
          placeholder="search products... "
          type="text"
        ></input>
        <button className="input-btn ">find</button>
      </div>
      <div>
        <h1>Filter by price </h1>
        <TwoWaySlider></TwoWaySlider>
        <div style={{ display: "flex-end" }}>
          <input type="text" className="slider-value" />
          <input type="text" className="slider-value" />
        </div>
        <div className="tot-items">
          <div>Groceries(10)</div>
          <div>Juice(10)</div>
        </div>
      </div>
      <div className="data-container">
        {data2.Filterdata.map((element, ind) => (
          <div key={ind}>
            <div>
              <img className="item-images" src={element.image} alt="image" />
            </div>
            <div className="item-text">
              <h5
                style={{
                  color: "#6a9739",
                  fontSize: "15px",
                  marginTop: "1rem",
                  fontWeight: "lighter",
                  marginBottom: "3px",
                }}
              >
                {element.name}
              </h5>
              <h5
                style={{
                  fontSize: "10px",
                  fontWeight: "lighter",
                  marginBottom: "1rem",
                }}
              >
                {element.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopleft;
