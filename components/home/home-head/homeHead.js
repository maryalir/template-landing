import { useState } from "react";
import Link from "next/link";
import "./homeHead.scss";

const benefits = [
  {
    title: "Redes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris.",
    imgUrl: "https://templates.themekit.dev/execoore/media/image-3.jpg",
    url: "/redes",
  },
  {
    title: "Computacion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris.",
    imgUrl: "https://templates.themekit.dev/execoore/media/image-4.jpg",
    url: "/computacion",
  },
  {
    title: "Telefonia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris.",
    imgUrl: "https://templates.themekit.dev/execoore/media/image-5.jpg",
    url: "/telefonia",
  },
];

export default function HomeHead() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="container-head">
        <div className="wrapper-texto">
          <h4>get started</h4>
          <h2>
            Create your <br /> personal or bussines <br /> mobile app quickly!
          </h2>
          <div className="btn-cta-header">
            <button>go to it!</button>
            <button onClick={() => setShowVideo(!showVideo)}>
              <img src="/icons/play-circle-regular.svg" alt="play" />
            </button>
          </div>
        </div>
        <div className="wrapper-img-ppal">
          <img src="" alt="ppal"/>
        </div>
        {showVideo && (
          <div className="container-video">
            <button onClick={() => setShowVideo(!showVideo)}>
              <img src="/icons/times-circle-regular.svg" alt="play" />
            </button>
            <video
              id="my-video"
              className="video-js"
              controls={true}
              preload="auto"
              width="100%"
              height="100%"
              autoPlay={true}
              loop={true}
              muted={true}
              style={{ backgroundColor: "white" }}
              // poster="MY_VIDEO_POSTER.jpg"
              data-setup="{}"
            >
              <source
                src="https://aemabitfolder.sfo2.digitaloceanspaces.com/screencorporate.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}
      </div>

      <div className="container-info">
        <div className="wrapper-texto">
          <h4>Advantages</h4>
          <h2>Benefits to build your Kwiklee app!</h2>
        </div>
        <div className="container-info-nav">
          {benefits.map((service, id) => {
            return (
              <Link key={id} href={`${service.url}`}>
                <div className="info-nav">
                  <img src={`${service.imgUrl}`} alt={`${service.title}`} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="container-about">
          <div className="about-img">
            <img src="https://templates.themekit.dev/execoore/media/image-2.jpg" />
          </div>
          <div className="about-info">
            <h4>ABOUT US</h4>
            <h2>Our values and goals</h2>
            <p>
              Kwiklee ™ is a startup dedicated to build new tools to the future
              troghut the software, providing qualified technical assistance
              with a professional-level team and a suitable equipment for the
              latest technology.
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
                <h4>Andres Mejias</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
