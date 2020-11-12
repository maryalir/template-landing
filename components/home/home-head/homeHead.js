import { useState } from "react";
import Link from "next/link";
import "./homeHead.scss";

const benefits = [
  {
    title: "Who we are",
    description:
      "At MIAPLUS+, we use smart tools and technology to simplify health insurance for all of us. Our goal is to take the confusion and chaos out of the process and build benefit-packed plans that still deliver surprisingly low rates, so you can focus on staying happy and healthy…and paying less for your healthcare.",
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/apreton-manos-feliz-pares-encargado-corredor-despues-firmar-contrato_1163-4185.jpg",
    url: "/redes",
  },
  {
    title: "How we do it",
    description:
      "All things work better with great relationships. So, we work hand-in-hand with our Care Partners – a carefully curated network of doctors, clinics and hospitals – to provide the best healthcare at the best possible price. We do the work to make things run as smooth as possible, so you and your doctor can focus on keeping you healthy.",
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/gente-negocios-trabajando-oficina-tableta-digital_1301-6586.jpg",
    url: "/computacion",
  },
  {
    title: "Quote now! ",
    description: "Mia Plus+ we are your best option.",
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/happy-female-agent-customer-meeting-cup-coffee-using-tablet-together.jpg",
    url: "/computacion",
  },
];

const partnersLogos = [
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/icon-ambetter-lg.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/BBPA-lockup.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/florida-blue-logo-5766E58EBE-seeklogo.com.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/AvMed_Logo_Stacked_2c.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/blue-cross-blue-shield-1-logo.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/Oscar_Health_logo.svg_.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/PNGPIX-COM-Molina-Healthcare-Logo-PNG-Transparent.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/FRIDAY_logo-SM_RGB_Facebook-1.png",
];

export default function HomeHead() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="container-head">
        <div className="wrapper-texto">
          <h4>Insurance Solutions</h4>
          <h2>
            YOUR FUTURE DEPENDS ON THE NEXT 5 MINUTES AFTER YOU READ THIS!
          </h2>
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
          <img
            src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/familia-joven-sus-hijos-casa-divirtiendose_1303-20999.jpg"
            alt="ppal"
          />
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

      <div className="wrapper-our-formula">
        <div className="background-wrapper"></div>
        <div className="wrapper-partners">
          {partnersLogos.map((logoUrl, id) => {
            return (
              <div className="partners" key={id}>
                <img src={`${logoUrl}`} alt="logo" />
              </div>
            );
          })}
        </div>
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
      </div>
    </>
  );
}
