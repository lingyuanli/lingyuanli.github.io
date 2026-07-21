import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://lingyuanli.github.io"),
  title: "Lingyuan Li | AI Agents & Open Source",
  description: "Lingyuan Li's academic homepage — AI agents, LLMOps, large language models, and open-source software.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Lingyuan Li | AI Agents & Open Source",
    description: "AI Agents · LLMOps · Open Source",
    url: "https://lingyuanli.github.io",
    siteName: "Lingyuan Li",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Lingyuan Li personal homepage" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingyuan Li | AI Agents & Open Source",
    description: "AI Agents · LLMOps · Open Source",
    images: ["/og.png"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
