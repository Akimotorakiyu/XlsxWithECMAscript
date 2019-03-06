module.exports = {
  title: "XlsxWithEcmaScript",
  description: "Xlsx With EcmaScript",
  base: "/xlsx/",
  // serviceWorker: {
  //   updatePopup: true // Boolean | Object, 默认值是 undefined.
  //   // 如果设置为 true, 默认的文本配置将是:
  //   // updatePopup: {
  //   //   message: "有新的文档内容",
  //   //   buttonText: "更新"
  //   // }
  // },
  head: [["link", { rel: "stylesheet", href: "/index.css" }]],
  themeConfig: {
    lastUpdated: "更新时间",
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/guide/" },
      {
        text: "github",
        link: "https://github.com/SilverLeaves/XlsxWithECMAscript"
      }
    ],
    sidebar: {
      "/": [
        {
          title: "指南",
          collapsable: false,
          children: ["/guide/"]
        },
        {
          title: "起步",
          collapsable: false,
          children: [
            "/start/",
            "/start/helloworld",
            "/start/basic",
            "/start/function",
            "/start/let",
            "/start/curd",
            "/start/promise",
            "/start/more",
            "/start/prototype"
          ]
        },
        {
          title: "项目",
          collapsable: false,
          children: ["/project/", "/project/tspro", "/project/debug"]
        },
        {
          title: "xlsx",
          collapsable: false,
          children: ["/xlsx/"]
        },
        {
          title: "network",
          collapsable: false,
          children: ["/network/", "/network/axios"]
        }
      ]
    }
  }
};
