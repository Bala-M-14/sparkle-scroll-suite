import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 grain">
      <div className="max-w-lg text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Error · 404</div>
        <h1 className="h-display mt-4 text-7xl">Lost in the<br /><span className="h-display-italic text-primary">morpheus</span>.</h1>
        <p className="mt-4 text-sm text-muted-foreground">This page never made it out of the editor.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background">
          ← Take me home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="h-display text-3xl">This page didn't load.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something tripped on our end.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-ink px-5 py-2.5 text-sm text-background">Try again</button>
          <a href="/" className="rounded-full border px-5 py-2.5 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Morpheus — A studio for shipped product." },
      { name: "description", content: "Morpheus is a freelance dev studio building websites, MVPs, and final-year projects with editorial polish." },
      { property: "og:title", content: "Morpheus — A studio for shipped product." },
      { property: "og:description", content: "Morpheus is a freelance dev studio building websites, MVPs, and final-year projects with editorial polish." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Morpheus — A studio for shipped product." },
      { name: "twitter:description", content: "Morpheus is a freelance dev studio building websites, MVPs, and final-year projects with editorial polish." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9c116f2c-e9df-4f1f-8ec5-d932e221ad9a/id-preview-439caa5b--0435a286-9244-4a75-9ab4-6515caf15d82.lovable.app-1779116220872.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9c116f2c-e9df-4f1f-8ec5-d932e221ad9a/id-preview-439caa5b--0435a286-9244-4a75-9ab4-6515caf15d82.lovable.app-1779116220872.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,200..900,0..100,0..1;1,9..144,200..900,0..100,0..1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Cursor />
      <div className="grain min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
