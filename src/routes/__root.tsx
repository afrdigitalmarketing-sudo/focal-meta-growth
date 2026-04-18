import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Focal — Meta Ads Specialists for DTC Brands" },
      { name: "author", content: "Focal" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Focal — Meta Ads Specialists for DTC Brands" },
      { name: "twitter:title", content: "Focal — Meta Ads Specialists for DTC Brands" },
      { name: "description", content: "Focal is a marketing website for a Meta ads agency, showcasing expertise in driving DTC growth." },
      { property: "og:description", content: "Focal is a marketing website for a Meta ads agency, showcasing expertise in driving DTC growth." },
      { name: "twitter:description", content: "Focal is a marketing website for a Meta ads agency, showcasing expertise in driving DTC growth." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d869368-ffc3-45e8-aaea-12d3350cf261/id-preview-932d43ab--a495561e-2895-4e01-8006-1e949595ebd7.lovable.app-1776532215933.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d869368-ffc3-45e8-aaea-12d3350cf261/id-preview-932d43ab--a495561e-2895-4e01-8006-1e949595ebd7.lovable.app-1776532215933.png" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
