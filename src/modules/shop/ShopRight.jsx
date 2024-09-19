// import { DataContext } from "../redux/Store";
import { DataContext } from "../../components/DataProvider";

import React, { createContext, useContext, useState } from "react";

import "./Shopright.css";
const ShopRight = () => {
  const data = useContext(DataContext);

  return (
    <div className="shop-right">
      <h3
        style={{
          marginTop: "3rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          color: "#9b9b9b",
        }}
      >
        Home / Shop
      </h3>
      <h1 style={{ color: "#8bc34a", fontSize: "3rem" }}>Shop </h1>
      <div className="show-data">
        <h4>Showing 1- 9 of 12 results</h4>
        <h4 style={{ "margin-right": "3rem" }}>Deafult Sorting </h4>
      </div>
      <div className="shop-img-container">
        {data.Items.map((item, ind) => (
          <div className="shop-item" key={ind}>
            <div>
              <img className="shop-item-image" src={item.image} alt="" />{" "}
            </div>
            <div className="shop-item-container">
              <h5 style={{ color: "#9b9b9b" }} className="shop-item-text">
                {item.catagorie}
              </h5>
              <h4 className="shop-item-text">{item.name}</h4>
              <h5 className="shop-item-text">{item.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopRight;
