import "../home-services/homeServices.scss";

export default function HomeServices() {
  return (
    <div className="wrapper-our-formula">
      <div className="background-wrapper"></div>
      <div className="head-formula">
        <div>
          <h4>OUR FORMULA</h4>
          <h2>Development process</h2>
        </div>
        <div>
          <h5>
            View Services <span> > </span>
          </h5>
        </div>
      </div>
      <div className="wrapper-steps">
        <div className="steps">
          <div className="step-line">
            <p>1</p>
            <div className="line-inline"></div>
          </div>
          <h4>Client Meeting</h4>
          <p>
            Consist in to select the best option to your business. what is the
            best way to implement our app with your clients?
          </p>
        </div>
        <div className="steps">
          <div className="step-line">
            <p>2</p>
            <div className="line-inline"></div>
          </div>
          <h4>Select a plan</h4>
          <p>
            Our subscription plans, are made thinking in the benefits that the
            client's needs to upgrade your business to the next level.
          </p>
        </div>
        <div className="steps">
          <div className="step-line">
            <p>3</p>
            <div className="line-inline"></div>
          </div>
          <h4>Build the future</h4>
          <p>
            The process of building is extremely kwiklee in a few days you can
            enjoy your new application in the market.
          </p>
        </div>
      </div>
    </div>
  );
}
