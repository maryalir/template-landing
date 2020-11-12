import "./homeMiddle.scss";

export default function HomeMiddle() {
  return (
    <div className="wrapper-about">
      <div className="wrapper-img-about"></div>
      <div className="about-info">
        <h4>Our Services</h4>
        <h2>Benefits for All</h2>
        <p>
          Everyone receives the medical care they need, and your company has
          happy, healthy, and productive employees. Discover all that SimplyBlue
          has to offer and find the right plan for you.
        </p>
        <h5>
          Get a quote now! <span> {`${">"}`} </span>
        </h5>
      </div>
      <div className="about-client-service">
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_how_to_reg_white_48dp.png" alt="icon" />
          </div>
          <div className="ctx-sm-service">
            <h5>Qualify</h5>
            <p>Acceptance of pre-existing conditions.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_add_location_alt_white_48dp.png" alt="icon" />
          </div>
          <div className="ctx-sm-service">
            <h5>Nationwide Network</h5>
            <p>Support on all United States.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_local_atm_white_48dp.png" alt="icon" />
          </div>
          <div className="ctx-sm-service">
            <h5>Financial Support</h5>
            <p>For you and your family.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_accessibility_new_white_48dp.png" alt="icon" />
          </div>
          <div className="ctx-sm-service">
            <h5>Free Quotes</h5>
            <p>Monthly quotes from $0.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_check_circle_white_48dp.png" alt="icon" />
          </div>
          <div className="ctx-sm-service">
            <h5>Warranty</h5>
            <p>Our support is the best on the market.</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/icons/baseline_support_agent_white_48dp.png" alt="icon" />
            
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
