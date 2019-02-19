module.exports = {
  title: "XlsxWithEcmaScript",
  description: "Xlsx With EcmaScript",
  base: "/xlsx/",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "文档", link: "/start/" }],
    sidebar: {
      "/": [
        {
          title: "起步",
          collapsable: false,
          children: [
            "/start/",
            "/start/helloworld",
            "/start/basic",
            "/start/function"
          ]
        },
        {
          title: "项目",
          collapsable: false,
          children: ["/project/", "/project/happend"]
        },
        {
          title: "xlsx",
          collapsable: false,
          children: ["/xlsx/"]
        },
        {
          title: "network",
          collapsable: false,
          children: ["/network/"]
        }
      ]
    }
  }
};
