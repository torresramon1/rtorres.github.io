"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StaggerChildren, StaggerItem } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

// TODO: Add your news items here, most recent first.
// Each item needs: date, title, description. Add link only if there's a relevant page.
const newsItems = [
  {
    date: "Mon YYYY", // TODO: e.g. "Mar 2025"
    title: "YOUR_NEWS_TITLE", // TODO: headline for this update
    description: "YOUR_NEWS_DESCRIPTION", // TODO: 1-2 sentence description
    link: "/blog/YOUR_POST_SLUG", // TODO: internal or external link — remove field if none
  },
];

export function NewsContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="News"
          description="Latest updates from my research, publications, and academic activities."
        />

        <StaggerChildren className="divide-y divide-border">
          {newsItems.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4 sm:gap-6 py-4 first:pt-0 hover:bg-accent-subtle transition-colors duration-150 -mx-3 px-3 rounded">
                <span className="font-mono text-xs text-foreground-quaternary w-20 flex-shrink-0 pt-0.5 tabular-nums">
                  {item.date}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-medium mb-0.5">{item.title}</h2>
                  <p className="text-sm text-foreground-secondary">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 mt-1 font-mono text-xs link-accent"
                    >
                      Read more <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* TODO: Update these social links to point to your own profiles */}
        <div className="mt-16 text-sm text-foreground-tertiary">
          <p>
            Follow my work on{" "}
            <a
              href={siteConfig.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Google Scholar
            </a>
            <span className="text-foreground-quaternary"> &middot; </span>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Twitter/X
            </a>
            <span className="text-foreground-quaternary"> &middot; </span>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
