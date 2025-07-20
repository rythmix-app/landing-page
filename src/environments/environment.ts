import {neon} from "@neondatabase/serverless";

export const environment = {
  production: false,
  neonConnectionString: process.env['NETLIFY_DATABASE_URL']!,
};
