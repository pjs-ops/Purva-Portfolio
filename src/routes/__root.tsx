import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Purva Jadhav — Software Developer & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Purva Jadhav — AI & Analytics Engineering student building scalable software and turning data into meaningful business insights.",
      },
      { property: "og:title", content: "Purva Jadhav — Software Developer & Data Analyst" },
      {
        property: "og:description",
        content:
          "A handcrafted portfolio of projects, skills, and stories from a developer who loves both code and data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
      <div>
        <h1 className="text-6xl font-black text-ink">404</h1>
        <p className="mt-3 text-muted-foreground">This page wandered off.</p>
        <a href="/" className="mt-6 inline-block rounded-full bg-berry px-6 py-3 text-white">
          Go home
        </a>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold text-ink">Something wobbled.</h1>
          <button onClick={reset} className="mt-6 rounded-full bg-berry px-6 py-3 text-white">
            Try again
          </button>
        </div>
      </div>
    );
  },
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
