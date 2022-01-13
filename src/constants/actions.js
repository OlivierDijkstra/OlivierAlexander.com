function actions(router) {
  return [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home index",
      perform: () => router.push("/"),
      type: "link",
      section: "navigation",
    },
    {
      id: "tools",
      name: "Tools",
      shortcut: ["t"],
      keywords: "tools tool",
      perform: () => router.push("tools"),
      type: "link",
      section: "navigation",
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => window.open("mailto:olivierdijkstra@gmail.com"),
      type: "contact",
      section: "other",
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["g"],
      keywords: "git github",
      perform: () =>
        window.open("https://github.com/OlivierDijkstra", "_blank"),
      type: "github",
      section: "other",
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "twitter tweet contact",
      perform: () => window.open("https://twitter.com/OndanksEchter", "_blank"),
      type: "twitter",
      section: "other",
    },
  ];
}

export default actions;
