import { useState } from "react";
import Link from "next/link";
import "./homeHead.scss";

const benefits = [
  {
    title: "Who we are",
    description:
      "At MIAPLUS+, we use smart tools and technology to simplify health insurance for all of us. Our goal is to take the confusion and chaos out of the process and build benefit-packed plans that still deliver surprisingly low rates, so you can focus on staying happy and healthy…and paying less for your healthcare.",
    imgUrl: "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/apreton-manos-feliz-pares-encargado-corredor-despues-firmar-contrato_1163-4185.jpg",
    url: "/redes",
  },
  {
    title: "How we do it",
    description:
      "All things work better with great relationships. So, we work hand-in-hand with our Care Partners – a carefully curated network of doctors, clinics and hospitals – to provide the best healthcare at the best possible price. We do the work to make things run as smooth as possible, so you and your doctor can focus on keeping you healthy.",
    imgUrl: "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/gente-negocios-trabajando-oficina-tableta-digital_1301-6586.jpg",
    url: "/computacion",
  },
];

export default function HomeHead() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="container-head">
        <div className="wrapper-texto">
          <h4>Insurance Solutions</h4>
          <h2>Life can change pretty fast. Make sure you're covered!</h2>
          <p>
            Big life changes like having a baby or leaving an employer-sponsored
            health plan may make you eligible for a Special Enrollment Period.
            If you need insurance right now, see our plans or contact your
            broker for some great advice.
          </p>
          <div className="btn-cta-header">
            <button>Get a Quote</button>
            <button onClick={() => setShowVideo(!showVideo)}>
              <img src="/icons/play-circle-regular.svg" alt="play" />
            </button>
          </div>
        </div>
        <div className="wrapper-img-ppal">
          <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/familia-joven-sus-hijos-casa-divirtiendose_1303-20999.jpg" alt="ppal" />
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
              style={{ backgroundColor: "white" }}
              // poster="MY_VIDEO_POSTER.jpg"
              data-setup="{}"
            >
              <source
                src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/insrance.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}
      </div>

      <div className="container-info">
        <div className="wrapper-texto">
          <h4>Advantages</h4>
          <h2>Benefits to get an insurance with us!</h2>
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
            <img src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/LogoMIAPLUSazulMINI.png" />
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
