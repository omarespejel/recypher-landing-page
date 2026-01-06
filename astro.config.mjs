import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';

export default defineConfig({
  integrations: [
    tailwind(),
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
  ],
  i18n: {
    locales: ['en', 'es', 'zh-CN', 'zh-TW', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
});
