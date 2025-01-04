import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon({
      collections: {
        mdi: await import('@iconify-json/mdi/icons.json'), 
      },
    }),
  ],
});
