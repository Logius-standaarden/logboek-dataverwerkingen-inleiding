import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  maxTocLevel: 2,
  specStatus: "WV",
  specType: "PR",
  pubDomain: "logboek",
  shortName: "inleiding",
  publishDate: "2024-10-23",
  publishVersion: "0.1.0",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/",
  prevVersion: [],

  edDraftURI: "https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/",

  authors:
    [
      {
        name: "Vedran Bilanovic",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Eelco Hotting",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
      {
        name: "Jeroen Mulder",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
    ],
  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
    ],

  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen-inleiding/",
});
