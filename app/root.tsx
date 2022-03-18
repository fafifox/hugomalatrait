import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css"

export const meta: MetaFunction = () => {
  return {
    title: "Hugo Malatrait",
    "msapplication-TileColor": "#18181b",
    "theme-color": "#18181b"
  };
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: 'preconnect', href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: "true"
    },
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
    },
    {
      rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180'
    },
    {
      rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32'
    },
    {
      rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16'
    },
    {
      rel: 'manifest', href: '/site.webmanifest'
    },
    {
      rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#18181b'
    },
  ]
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script defer data-domain="hugomalatrait.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
