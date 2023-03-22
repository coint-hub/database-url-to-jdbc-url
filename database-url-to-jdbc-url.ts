#!/usr/bin/env -S deno run --allow-env
import {urlParse} from 'https://deno.land/x/url_parse@1.1.0/mod.ts';


if (Deno.args.length != 1) {
    console.error("usage> database-url-to-jdbc-url.ts $DATABASE_URL");
    Deno.exit(1);
}

const databaseUrl = Deno.args[0];
const url = urlParse(databaseUrl);
console.log(`jdbc:postgresql://${url.host}${url.pathname}?user=${url.username}&password=${url.password}`)
