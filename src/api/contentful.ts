import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'us6r6oy788vz',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});
