import { useState } from "react";
import Link from "next/link";
import "./homeSample.scss";

export default function HomeSample() {
  const [included, setIncluded] = useState(false);
  const [benefits, setBenefits] = useState(false);

  return (
    <div className="wrapper-samples">
      <div className="wrapper-sample">
        <div className="sample-img">
          <img src="https://templates.themekit.dev/execoore/media/box-1.png" />
        </div>
        <div className="sample-info">
          <h4>ANALYTICS TOOLS</h4>
          <h2>Innovative dashboard</h2>
          <p>
            The system of turns at Real-time build charts with friendly
            dashboard with unique filters to see more faster the data of your
            business.
          </p>
          <div className="sample-details">
            <div className="text-detail">
              <h5 onClick={() => setIncluded(!included)}>
                <span>></span> What's included
                {included && (
                  <ul>
                    <li>Global data analytics</li> <li>Customer analytics</li>{" "}
                    <li>Staff analytics</li>{" "}
                  </ul>
                )}
              </h5>
              <h5 onClick={() => setBenefits(!benefits)}>
                <span>></span> Some benefits
                {benefits && (
                  <ul>
                    <li>Monitoring customer service times</li>{" "}
                    <li>History of all transactions</li> <li>Easy to manage</li>{" "}
                  </ul>
                )}
              </h5>
            </div>
            <Link href="/contact">
              <button>Contact us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper-sample">
        <div className="sample-info">
          <h4>MOBILE READY</h4>
          <h2>Available everywhere</h2>
          <p>
            The tool with more usage in this world is a mobile device, the
            mobile apps are the next step in this new world, with Kwiklee you
            can change with him.
          </p>
          <div className="sample-details-b">
            <div className="s-details">
              <div className="s-img-detail"></div>
              <div className="s-text-detail">
                <h4>Mobile</h4>
                <p>IOS/Android</p>
              </div>
            </div>
            <div className="s-details">
              <div className="s-img-detail"></div>
              <div className="s-text-detail">
                <h4>THIN AND SMART</h4>
                <p>CMS Integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sample-img">
          <img src="https://templates.themekit.dev/execoore/media/box-2.png" />
        </div>
      </div>
    </div>
  );
}
