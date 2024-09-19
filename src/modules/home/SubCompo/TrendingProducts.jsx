// import { Button } from "@mui/material";
import { logo } from "../../../assets/data";
import Button from "../../../utils/ShopButton";
import { groceries } from "../../../assets/data";
import "./TrendingProducts.css";
const TrendingProducts = () => {
  return (
    <div className="bestsellingproduct">
      <h1 style={{ textAlign: "center", marginTop: "7rem" }}>
        Trending Products
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        <img src="src/assets/leaf.png" alt="image" />
      </div>
      <div className="grocerie-section">
        <div className="grocery">
          <div>
            <img className="grocery-image" src={groceries[0]} alt="grocery" />
          </div>
          <div className="grocery-content">
            <h3 className="grocery-item">Groceries</h3>
            <h2 className="grocery-item">Assorted Coffee</h2>
            <h3 className="grocery-item">$35.00</h3>
          </div>
        </div>
        <div className="grocery">
          <div>
            <img className="grocery-image" src={groceries[1]} alt="grocery" />
          </div>
          <div className="grocery-content">
            <h3 className="grocery-item">Groceries</h3>
            <h2 className="grocery-item">Assorted Coffee</h2>
            <h3 className="grocery-item">$35.00</h3>
          </div>
        </div>
        <div className="grocery">
          <div>
            <img className="grocery-image" src={groceries[2]} alt="grocery" />
          </div>
          <div>
            <h3 className="grocery-item">Groceries</h3>
            <h2 className="grocery-item">Assorted Coffee</h2>
            <h3 className="grocery-item">$35.00</h3>
          </div>
        </div>
        <div className="grocery">
          <div>
            <img className="grocery-image" src={groceries[3]} alt="grocery" />
          </div>
          <div className="grocery-content">
            <h3 className="grocery-item">Groceries</h3>
            <h2 className="grocery-item">Assorted Coffee</h2>
            <h3 className="grocery-item">$35.00</h3>
          </div>
        </div>
      </div>
      <div className="review">
        <h1 style={{ textAlign: "center", marginTop: "7rem" }}>
          Customer Reviews
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <img src="src/assets/leaf.png" alt="image" />
        </div>
      </div>
      <div className="review-container">
        <div className="mila-kunis">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </div>
        <div className="deal">
          <div className="deal-day">
            <h1 style={{ width: "80%", textAlign: "center" }}>
              Deal Of The Day 15% Off On All Vegetables!
            </h1>
          </div>
          <div className="deal-day">
            <h4
              style={{ width: "80%", textAlign: "center", marginTop: "30px" }}
            >
              I am text block. Click edit button to change this tex em ips.
            </h4>
          </div>
          <div className="deal-day">
            <Button></Button>
          </div>
        </div>
        <div className="mike-sendler">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h2 style={{ marginTop: "30px" }}>Featured Brands : </h2>
        </div>
        {logo.map((img, ind) => (
          <div key={ind}>
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
