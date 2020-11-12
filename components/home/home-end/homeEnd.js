
import "./homeEnd.scss";


export default function HomeEnd() {
  return (
    <>
      <div className="container-about">
        <div className="about-img">
          <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/primamary.jpg" />
        </div>
        <div className="about-info">
          <h4>ABOUT US</h4>
          <h2>Our values and goals</h2>
          <p>
            At MIAPLUS+, we believe quality healthcare should be accessible,
            easy and affordable. Our approach to plans, services and benefits
            make health insurance easy-to-understand and easy-to-use.
          </p>
          <div className="about-sign">
            <div className="logo-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/James_Rodriguez_Signature.svg/1280px-James_Rodriguez_Signature.svg.png"
                alt="sign"
              />
            </div>
            <div>
              {" "}
              <h4>Nerly Manzano</h4>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
