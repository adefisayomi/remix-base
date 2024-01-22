import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import styles from './tailwind.css'
import clsx from "clsx"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { toast } from 'sonner'
import CustomToast, { ToastType } from "./components/CustomToast";
import { toastMessageKey } from "./constants";
import { commitSession, getSession, themeSessionResolver } from "./services/session.server";
import { useEffect } from "react";
import Layout from "./sections/layout/layout";




export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  const toastPayload = session.get(toastMessageKey) || null;
  const { getTheme } = await themeSessionResolver(request)

  return json(
    { toastPayload, theme: getTheme() },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  );
}


export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}

export function App() {
  const data = useLoaderData<typeof loader>()

  useEffect(() => {
    if (!data.toastPayload) return;
    const {message, variant} = data.toastPayload
    if (!variant) toast(message)
    else toast[variant as ToastType](message)
  }, [data.toastPayload])

  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <CustomToast />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];