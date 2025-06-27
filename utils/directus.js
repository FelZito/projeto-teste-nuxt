import { createDirectus, rest } from '@directus/sdk';
const directus = createDirectus('https://directus.i9sellz.com.br/').with(rest());

export default directus;