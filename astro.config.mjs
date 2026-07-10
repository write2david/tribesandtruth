// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://write2david.github.io', // Your URL
  base: '/tribesandtruth',               // Your Repo Name

	integrations: [
		starlight({

			title: 'Twelve Tribes Info',
      
			favicon: '/favicon.png',

			head: [
        			
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
