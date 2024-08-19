import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "code",
    prefix: "/note/",
    children: [
      {
        text: "笔记",
        icon: "code",
        link: "/",
      }, {
        text: "前端开发",
        children: [
          "web/",
          "html/",
          "css/",
          "js/",
        ]
      }
    ]
  }, {
    text: "随笔",
    icon: "pen",
    link: "essay"
  }, {
    text: "链接",
    icon: "link",
    link: "link",
  }, {
    text: "软件",
    icon: "laptop-code",
    link: "software",
  }
]);
