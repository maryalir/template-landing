import Link from "next/link";
import "./homeHead.scss";

const services = [
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
  {
    title: "Seguridad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris.",
    imgUrl: "https://templates.themekit.dev/execoore/media/image-6.jpg",
    url: "/seguridad",
  },
];

export default function HomeHead() {
  return (
    <>
      <div className="container-video">
        <video
          id="my-video"
          className="video-js"
          controls={false}
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
      <div className="container-info">
        <div className="wrapper-texto">
          <h2>FREE CONSULTING</h2>
          <p>
            We are experts in security audits. We have more than twenty years of
            expirience. <br /> We enoucrage to contact us and start a free
            consulting.
          </p>
          <a href="#contactus">Contact us</a>
        </div>
        <div className="container-info-nav">
          {services.map((service, id) => {
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
          <div className="about-img"></div>
          <div className="about-info">
            <h4>ABOUT US</h4>
            <h2>Our values and goals</h2>
            <p>
              AG Com es una empresa dedicada a la comercializacion y equipamento
              tecnologico referente a las telecomunicaciones(Redes, Telefonia y
              Seguridad), brindando ademas una calificada asistencia tecnica con
              un eqipo de nivel profesional y un instrumental propicio para la
              ultima tecnologia.
            </p>
            <div className="about-sign">
              <div className="logo-img">
                <img src="https://templates.themekit.dev/execoore/media/image-2.jpg" />
              </div>
              <h4>Boss LastName</h4>
              <p>CEO and Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
