// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.twelvetribesinfo.com', // Your URL
  base: '/',               // Your Repo Name

redirects: {
    '/using-hebrew': '/hebrew',
    '/deity-of-jesus': '/divinity',
  },

	integrations: [
		starlight({

			title: 'Twelve Tribes Info',
			
			social: [
        {
          icon: 'facebook',
          label: 'Facebook Page',
          href: 'https://www.facebook.com/TwelveTribesInfo',
        },
      ],

      
			favicon: '/favicon.png',

			head: [
				{
					tag: 'script',
					attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-JM1D5N7XGX' },
				},
				{
					tag: 'script',
					content: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-JM1D5N7XGX');",
				},
			],

			components: {
        			// Adding footer code which includes Bible reference tagger.
        			Footer: './src/components/Footer.astro',
      				},

			customCss: ['./src/styles/custom.css'],

			//social: [{ icon: 'facebook', label: 'home', href: '/website' }],

			sidebar: [
				{
					label: 'OVERVIEW',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'THREE ETERNAL DESTINIES',
					autogenerate: { directory: 'three eternal destinies' },
				},
				{
					label: 'SALVATION BELIEFS',
					autogenerate: { directory: 'salvation beliefs' },
				},
				{
					label: 'OTHER BELIEFS',
					autogenerate: { directory: 'other beliefs' },
				},
			],
		}),
	],
});
