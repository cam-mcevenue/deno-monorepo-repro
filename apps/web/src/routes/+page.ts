// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { hello } from '@scope/foo';
//import { hello } from '../../../../packages/foo/mod.ts';
hello('Cam');
