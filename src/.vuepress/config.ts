import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/godhorse-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "godhorse",
      description: "godhorse的博客",
    },

    "/en/": {
      lang: "en-US",
      title: "godhorse",
      description: "godhorse's blog",
    }
  },

  theme,
});
