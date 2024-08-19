import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": ["","intro"],
  "/note/": [
    {
      text: "笔记",
      link: "/note/",
      icon: "code",
      prefix: "/note/",
      children:[
        "html/",
        "css/",
        "js/",
      ]
    },
  ],
});
