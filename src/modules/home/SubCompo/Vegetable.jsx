import Button from "../../../utils/ShopButton";
import { fresh } from "../../../assets/data";
import "./Vegetable.css";
const Vegetable = () => {
  return (
    <div className="vegmain-container">
      <div className="vegetable-container">
        <div className="vegis-img">
          <div className="veg-item">
            <h1> Farm Fresh Fruits</h1>
            <p style={{ marginTop: "15px", lineHeight: "25px" }}>
              veg-item Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quo!
            </p>
            <Button></Button>
          </div>
        </div>
        <div className="vegis-img">
          <div className="veg-item">
            <h1> Farm Fresh Fruits</h1>
            <p style={{ marginTop: "15px", lineHeight: "25px" }}>
              veg-item Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quo!
            </p>
            <Button></Button>
          </div>
        </div>
        <div className="vegis-img">
          <div className="veg-item">
            <h1> Farm Fresh Fruits</h1>
            <p style={{ marginTop: "15px", lineHeight: "25px" }}>
              veg-item Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quo!
            </p>
            <Button></Button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          height: "150px",
        }}
      >
        <h1
          style={{
            color: "white",
            marginTop: "4%",
            // justifyContent: "flex-start",
          }}
        >
          Get 25% Off On Your First Purchase{" "}
        </h1>
        <Button> </Button>
      </div>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Try It For Free. No Registration Needed
        </h1>
      </div>
    </div>
  );
};

export default Vegetable;
