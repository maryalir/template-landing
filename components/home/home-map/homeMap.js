import "./homeMap.scss";

const promoText = [
  "$0 Monthly quotes",
  "Acceptance of pre-existing conditions.",
  "Financial Support.",
  "Nationwide Network.",
];

export default function HomeMap() {
  return (
    <>
      <div className="container-map">
        <div className="wrapper-text">
          <h4>How is MiaPlus+ is different? </h4>
          <h2>Check out our new plan benefits</h2>
          <ul>
            {promoText.map((text, i) => {
              return <li key={i}>{text}</li>;
            })}
          </ul>
          <div className="btn-cta-header">
            <button>Get a quote now!</button>
          </div>
        </div>
        <div className="wrapper-map">
          <img
            src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/MapChart_Map.png"
            alt="map"
          />
        </div>
      </div>
    </>
  );
}
