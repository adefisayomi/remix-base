import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";
import { SESSION_SECRET } from "~/constants";
import { createDatabaseSessionStorage } from "~/lib/controllers/createDatabaseSession";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [SESSION_SECRET!], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
export let { getSession, commitSession, destroySession } = sessionStorage;