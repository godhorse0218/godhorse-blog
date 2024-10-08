import {hopeTheme} from "vuepress-theme-hope";

import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://godhorse0218.github.io",

  author: {
    name: "godhorse",
    url: "https://godhorse0218.github.io",
  },

  iconAssets: "fontawesome-with-brands",

  favicon: "/favicon.ico",

  logo: "/logo.svg",

  repo: "godhorse0218/godhorse-blog",

  docsDir: "src",

  blog: {
    medias: {
      BiliBili: "https://example.com",
      Email: "809631004@qq.com",
      Gitee: "https://gitee.com/godhorses",
      GitHub: "https://github.com/godhorse0218",
      QQ: "809631004",
      Wechat: "",
    },
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      displayFooter: true,

      blog: {
        description: "前端开发者",
        intro: "/intro.html",
      },
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    /**
     * English locale config
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: true,

      blog: {
        description: "front end developer",
        intro: "/en/intro.html",
      },
      // page meta
      metaLocales: {
        editLink: "edit this page on github",
      },
    },

  },

  plugins: {
    blog: true,
  },
});
