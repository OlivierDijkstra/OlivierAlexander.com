function actions(router) {
  return [
    // {
    //   id: "group",
    //   name: "Group",
    //   shortcut: ["g"],
    //   keywords: "group",
    //   type: "group",
    //   section: "group",
    // },
    // {
    //   id: "blog",
    //   name: "Blog",
    //   shortcut: ["b"],
    //   keywords: "blog",
    //   perform: () => (window.location.pathname = "blog"),
    //   type: "link",
    //   section: "stuff",
    //   parent: "links",
    // },
    {
      id: "works",
      name: "Works",
      shortcut: ["w"],
      keywords: "works work portfolio",
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
      // Open github in a new tab
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
      // Open github in a new tab
      perform: () => window.open("https://twitter.com/OndanksEchter", "_blank"),
      type: "twitter",
      section: "other",
    },
  ];
}

export default actions;
