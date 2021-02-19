import { Organization } from "schema-dts";
import logo from "../../assets/images/logos/nenuphar.svg";
import { person } from "./person";

export const organization: Organization = {
  "@type": "Organization",
  description: "Shiatsu thérapeutique",
  email: person["email"],
  founder: person,
  foundingDate: "2015-01-08",
  legalName: "de Loeper Nathalie",
  logo: {
    "@type": "ImageObject",
    contentUrl: `https://shiatsutherapie78.info${logo}`,
    name: "4 nenuphars",
    description: 'logo de "de Loeper Shiatsu", réalisé par France Bizot',
    datePublished: "2019-09-29",
  },
  telephone: person["telephone"],
  url: "https://shiatsutherapie78.info/",
};
