import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-bkg-footer"></div>
      <div className="wrapper-ft-box">
        <div className="ft-box">
          <h3>MiaPlus+ ™</h3>
          <p>Surprisingly low rates that make you feel better.</p>
          <img
            src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/en_badge_web_generic.png"
            alt="android"
          />
          <div className="redes"></div>
        </div>
        <div className="ft-box">
          <h3>Discover</h3>
          <ul>
            <Link href="#">
              <li>Get a Quote NOW!</li>
            </Link>
            <Link href="#">
              <li>Download our app</li>
            </Link>
            <Link href="#">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="ft-box">
          <h3>Get in touch!</h3>
          <p>
            Email: <span>ssalud.nm@gmail.com</span>
          </p>
          <p>
            Ph1: <span>(786) 253 4150</span>
          </p>
          <p>
            Ph2: <span>(786) 853 4520</span>
          </p>
          <p>
            Call us:
            <span>Mon - Sat (7am - 10pm)</span>
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
