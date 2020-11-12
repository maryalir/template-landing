import Link from "next/link";
import "./homeAbout.scss";

const benefits = [
  {
    title: "Who we are",
    description:
      "At MIAPLUS+, we use smart tools and technology to simplify health insurance for all of us. Our goal is to take the confusion and chaos out of the process and build benefit-packed plans that still deliver surprisingly low rates, so you can focus on staying happy and healthy…and paying less for your healthcare.",
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/apreton-manos-feliz-pares-encargado-corredor-despues-firmar-contrato_1163-4185.jpg",
    url: "#",
  },
  {
    title: "How we do it",
    description:
      "All things work better with great relationships. So, we work hand-in-hand with our Care Partners – a carefully curated network of doctors, clinics and hospitals – to provide the best healthcare at the best possible price. We do the work to make things run as smooth as possible, so you and your doctor can focus on keeping you healthy.",
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/gente-negocios-trabajando-oficina-tableta-digital_1301-6586.jpg",
    url: "#",
  },
  {
    title: "get a Quote now! ",
    description: `Feel good about individual & family healthcare. At MiaPlus+, we believe protecting yourself and your family with quality health insurance should be easy and affordable. Plans that offer $0 deductible to help you save on all of your healthcare needs!`,
    imgUrl:
      "https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/happy-female-agent-customer-meeting-cup-coffee-using-tablet-together.jpg",
    url: "https://miaplus-quote.vercel.app",
  },
];

export default function HomeAbout() {
  return (
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
  );
}
