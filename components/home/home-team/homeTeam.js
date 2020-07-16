import Link from "next/link";
import "./homeTeam.scss";

export default function HomeTeam() {
  return (
    <div className="wrapper-team">
      <div className="wrapper-bckg-team"></div>
      <div className="content-team">
        <div className="ctx-text-team">
          <h4>Our Team</h4>
          <h2>The big family</h2>
          <p>
            We are a team with a lots ideas to continuous moving with the
            planet, at with the ambition of outside him too, we go for all to
            contribute with all people on this world, with innovation and a good
            customer service. We are Kwiklee.
          </p>
          <Link href="#">
            <h5>
              Take a call with us <span>></span>
            </h5>
          </Link>
        </div>
        <div className="ctx-team">
          <div className="person-team">
            <img
              src="https://templates.themekit.dev/codrop/media/users/user-1.jpg"
              alt="person-profile"
            />
            <div className="person-text">
              <h4>Rodrigo Bum</h4>
              <h5>Marketing</h5>
              <div className="more-info">
                <div className="redes"></div>
                <p>Lorem ipsum dolor sitamet consectetur eiusmo.</p>
              </div>
            </div>
          </div>
          <div className="person-team">
            <img
              src="https://templates.themekit.dev/codrop/media/users/user-3.jpg"
              alt="person-profile"
            />
            <div className="person-text">
              <h4>Rosa Caceres</h4>
              <h5>Scrum Master</h5>
              <div className="more-info">
                <div className="redes"></div>
                <p>Lorem ipsum dolor sitamet consectetur eiusmo.</p>
              </div>
            </div>
          </div>
          <div className="person-team">
            <img
              src="https://templates.themekit.dev/codrop/media/users/user-5.jpg"
              alt="person-profile"
            />
            <div className="person-text">
              <h4>Edwin Tark</h4>
              <h5>Graphic Designer</h5>
              <div className="more-info">
                <div className="redes"></div>
                <p>Lorem ipsum dolor sitamet consectetur eiusmo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
