import type { Metadata } from "next";
import { NewsContent } from "./news-content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from Ramon Torres' research in security, privacy, and censorship circumvention.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Ramon Torres",
    description: "Latest news and updates from Ramon Torres' research in security, privacy, and AI governance.",
    url: "/news",
  },
};

export default function NewsPage() {
  return <NewsContent />;
}
