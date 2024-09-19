import { groceries } from "../../../assets/data";
import "./BestProduct.css";
const Bestproduct = () => {
  return (
    <div className="bestsellingproduct">
      <h1 style={{ textAlign: "center" }}>Best Selling Products </h1>
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
    </div>
  );
};

export default Bestproduct;
