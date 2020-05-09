import Link from "next/link";
import "./homeSample.scss";

export default function HomeSample() {
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
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
            tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
            veniam quis nostrud exercitation mediocre contorno ullamco.
          </p>
          <div className="sample-details">
            <div className="text-detail">
              <h5>
                <span>></span> What's included
              </h5>
              <h5>
                <span>></span> Some benefits
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
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
            tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
            veniam quis nostrud exercitation mediocre contorno ullamco.
          </p>
          <div className="sample-details-b">
            <div className="s-details">
              <div className="s-img-detail"></div>
              <div className="s-text-detail">
                <h4>Mobile</h4>
                <p>Ipsum dolor sitero</p>
              </div>
            </div>
            <div className="s-details">
              <div className="s-img-detail"></div>
              <div className="s-text-detail">
                <h4>THIN AND SMART</h4>
                <p>Ipsum dolor sitero</p>
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
