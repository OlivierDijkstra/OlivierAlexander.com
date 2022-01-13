const description = `I am a software engineer based in the Netherlands, currently working
          at GUTS as a frontend developer. This is a place where I share my
          work, tools and other cool things I found around the web.`;

const config = {
  title: undefined,
  defaultTitle: "Olivier Alexander",
  titleTemplate: "Olivier Alexander | %s",
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.olivieralexander.com",
    site_name: "Olivier Alexander",
    description,
  },
  twitter: {
    handle: "@OndanksEchter",
    site: "@OndanksEchter",
    cardType: "summary_large_image",
  },
};

export default config;
