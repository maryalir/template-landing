import { InlineWidget } from "react-calendly";
import "./calendlyComponent.scss";

export default function CalendlyComponent() {
  return (
    <div className="wrapper-calendly">
      <div className="container-calendly">
        <InlineWidget
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          prefill={{
            email: "test@test.com",
            firstName: "Jon",
            lastName: "Snow",
            name: "Jon Snow",
          }}
          url="https://calendly.com/miaplus"
          utm={{
            utmCampaign: "Spring Sale 2019",
            utmContent: "Shoe and Shirts",
            utmMedium: "Ad",
            utmSource: "Facebook",
            utmTerm: "Spring",
          }}
        />
      </div>
    </div>
  );
}
