import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-bkg-footer"></div>
      <div className="wrapper-ft-box">
        <div className="ft-box">
          <h3>Custom Title</h3>
          <p>
            Full suite enable teams to develop unique search and discovery
            experiences.
          </p>
          <div className="redes"></div>
        </div>
        <div className="ft-box">
          <h3>Custom Title</h3>
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
            Address: <span>139 Baker St, E1 7PT,London</span>
          </p>
          <p>
            Email: <span>contacts@example.com</span>
          </p>
          <p>
            Phone: <span>(02) 123 333 444</span>
          </p>
          <p>
            Opening:
            <span> hours 8am-5pm Mon - Fri</span>
          </p>
        </div>
      </div>
      <div className="ft-copy">
        <p>© 2020 Devel Q Corp - Technology And Business.</p>
        <p>Contact us | Privacy policy</p>
      </div>
    </div>
  );
}
