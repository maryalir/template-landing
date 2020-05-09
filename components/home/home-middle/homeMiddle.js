import "./homeMiddle.scss";

export default function HomeMiddle() {
  return (
    <div className="wrapper-about">
      <div className="wrapper-img-about"></div>
      <div className="about-info">
        <h4>ABOUT US</h4>
        <h2>El arte del buen servicio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod
          tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
        <h5>
          Atencion al cliente <span> > </span>
        </h5>
      </div>
      <div className="about-client-service">
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Seguro</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Actualizado</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-ethernet"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>top hadware</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-headset"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Equipo Premium</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-coins"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Garantizado</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
        <div className="sm-service">
          <div className="img-sm-service">
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="ctx-sm-service">
            <h5>Soporte</h5>
            <p>Lorem ipsum amete</p>
          </div>
        </div>
      </div>
    </div>
  );
}
