import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-bkg-footer"></div>
      <div className="wrapper-ft-box">
        <div className="ft-box">
          <h3>Kwiklee ™</h3>
          <p>
            Full suite enable teams to develop unique search and discovery
            experiences.
          </p>
          <div className="redes"></div>
        </div>
        <div className="ft-box">
          <h3>Discover</h3>
          <ul>
            <Link href="#">
              <li>Partners and advertising</li>
            </Link>
            <Link href="#">
              <li>About us and the company</li>
            </Link>
            <Link href="#">
              <li>Services and projects</li>
            </Link>
            <Link href="#">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="ft-box">
          <p>
            Address: <span>5091 NW 7 TH ST, Miami, FL</span>
          </p>
          <p>
            Email: <span>info@kwiklee.com</span>
          </p>
          <p>
            Phone: <span>(305) 922 97 00</span>
          </p>
          <p>
            Opening:
            <span> hours 8am-5pm Mon - Fri</span>
          </p>
        </div>
      </div>
      <div className="ft-copy">
        <p>© 2020 Kwiklee - Technology And Business.</p>
        <p>Contact us | Privacy policy</p>
      </div>
    </div>
  );
}
