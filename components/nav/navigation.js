import { useState } from "react";
import Link from "next/link";
import "./nav.scss";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Redes",
    url: "/redes",
  },
  {
    name: "Computacion",
    url: "/computacion",
  },
  {
    name: "Telefonia",
    url: "/telefonia",
  },
  {
    name: "Seguridad",
    url: "/seguridad",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

const regLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

export default function Navigation() {
  const [hamburger, setHamburger] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <div className="header scrolling-nav">
        <div className="container">
          <nav>
            <ul>
              <Link href="/">
                <li className="title">AG Com</li>
              </Link>
            </ul>
            <ul className="reg-menu">
              {regLinks.map((link, id) => {
                return (
                  <Link key={id} href={`${link.url}`}>
                    <li>{link.name}</li>
                  </Link>
                );
              })}
            </ul>
            <ul
              className="hamburger-menu"
              onClick={() => setHamburger(!hamburger)}
            >
              <li>
                <div className="wrapper-header">
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {hamburger && (
        <div className="mobileNav">
          <ul className="mobile-nav">
            {links.map((link, id) => {
              return (
                <Link key={id} href={`${link.url}`}>
                  <li onClick={() => setHamburger(!hamburger)}>{link.name}</li>
                </Link>
              );
            })}
            <div>
              <p>CALL US: (023) 112 589 139</p>
              <p>
                Baker Street London, <br /> United Kingdom
              </p>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
