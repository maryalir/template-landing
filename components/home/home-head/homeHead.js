import { useState } from "react";
import "./homeHead.scss";

const partnersLogos = [
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/icon-ambetter-lg.png",
  "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/logos/BBPA.png",
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
          {/* <p>
            Big life changes like having a baby or leaving an employer-sponsored
            health plan may make you eligible for a Special Enrollment Period.
            If you need insurance right now, see our plans or contact your
            broker for some great advice.
          </p> */}
          <p>Open enrollment is only once at year and it's now!</p>
          <div className="btn-cta-header">
            <button>Get a quote now!</button>
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
    </>
  );
}
