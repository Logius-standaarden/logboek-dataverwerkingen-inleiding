var respecConfig = {
  useLogo: true,
  useLabel: true,
  specStatus: "WV",
  specType: "PR",
  pubDomain: "api",
  shortName: "logboek_algemeen",
  publishDate: "2024-10-23",
  publishVersion: "0.1.0",
  title: "Algemene inleiding - Logboek dataverwerkingen",

  edDraftURI: "https://logius-standaarden.github.io/logboek-dataverwerkingen_Inleiding/",
  
  // previousPublishVersion: "(none)",
  // content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
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
    ],
  authors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      },
      {
        name: "Jeroen Mulder",
        company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
        companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
      },
    ],

  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen",
 
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "Algemene_inleiding-Logboek_Dataverwerking.pdf",
      },
  ],
  postProcess: [window.respecMermaid.createFigures]
};
