import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客",
      description: "godhorse的博客",
    },

    "/en/": {
      lang: "en-US",
      title: "blog",
      description: "Godhorse's blog",
    }
  },

  theme,
});
