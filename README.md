# Reproduction steps

## Clone repo and install

```
cd apps/web

deno install --allow-scripts

deno run dev
```

Should get the following error:

```
Error: The following dependencies are imported but could not be resolved:

@scope/foo (imported by /Users/cmcevenue/Desktop/repos/playground/deno-repro/apps/web/src/routes/+page.ts)
```

## Workaround
Add package.json to package you are importing into sveltekit project

```
packages/foo/package.json

{
    "name": "@scope/foo",
    "version": "1.0.0",
    "type": "module",
    "types": "./mod.ts",
    "exports": {
        ".": "./mod.ts"
    }
}
```

Add alias to sveltekit config
```
apps/web/svelte.config.js

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@scope/*': '../../packages/*'
		}
	}
};

export default config;
```
