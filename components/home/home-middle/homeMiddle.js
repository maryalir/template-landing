import "./homeMiddle.scss";

export default function HomeMiddle() {
  return (
    <div className="wrapper-about">
      <div className="wrapper-img-about"></div>
      <div className="about-info">
        <h4>ABOUT US</h4>
        <h2>The art of good service</h2>
        <p>
          Despite all the noise and hype that customer service entails these
          days, it really boils down to a simple old truth, often known as the
          Golden Rule: "Treat others as you would like to be treated." .
        </p>
        <h5>
          Customer Support <span> > </span>
        </h5>
      </div>
      <div className="about-client-service">
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Security</h5>
            <p>Security of the information.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Updated</h5>
            <p>Free updates.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-ethernet"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Top Hardware</h5>
            <p>Only the new in the market.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-headset"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Premium Team</h5>
            <p>The best staff for the best customer.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-coins"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Warranty</h5>
            <p>On all our software.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Support Specialist.</h5>
            <p>24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
