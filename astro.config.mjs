import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';
import yeskunallumami from '@yeskunall/astro-umami';

// https://astro.build/config
export default defineConfig({
	site: 'https://decaller.github.io', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	base: '/web-yayasan-bina-insan-mustaqbal',
	sitemap: true, // Generate sitemap (set to "false" to disable)
	trailingSlash: 'always', // This can help with routing
	build: {
		assets: 'assets', // This helps with asset handling
	},
	publicDir: './public',
	integrations: [
		sitemap(),
		mdx(),
		lit(),
		icon(),
		yeskunallumami({ id: '9aac38a8-7654-46da-82db-3a3a548494d9' }),
	], // Add renderers to the config
});
