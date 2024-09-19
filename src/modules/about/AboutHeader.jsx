import "./AboutHeader.css";
const AboutHeader = () => {
  return (
    <div>
      <div
        style={{ fontSize: "52px", textAlign: "center", marginBottom: "6rem" }}
      >
        About Us
      </div>
      <div className="aboutus-container">
        <div className="fav-text">
          <h2 className="fav-text-h2">We Are Your Favourite Store.</h2>
          <p className="fav-text-p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, eligendi, earum cupiditate adipisci impedit reiciendis
            maxime provident rem iste ipsam odio ex unde, consequatur doloremque
            culpa ut! Quo excepturi vitae mollitia dolorum nobis autem modi
          </p>
          <p className="fav-text-p">
            quos. Eligendi, dolobus? Repellendus possimus est ipsam impedit
            perspiciatis commodi ratione ducimus obcaecati eius itaque beatae
            dolore quae veritatis, tempore dolor sit tenetur iste, non officia
            praesentium, voluptatem necessitatibus vero? Nisi animi sunt
            accusantium nostrum.
          </p>
        </div>
        <div className="fav-img">
          <img
            className="fav-img-about"
            src={
              "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg"
            }
            alt="qwe"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutHeader;
