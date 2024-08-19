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
        link: "",
      }, {
        text: "前端开发",
        children: [
          {
            text: "HTML 教程",
            icon: "html5",
            link: "html/",
          },
          {
            text: "CSS 教程",
            icon: "css3",
            link: "css/",
          },
          {
            text: "JavaScript 教程",
            icon: "js",
            link: "js/",
          }
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
