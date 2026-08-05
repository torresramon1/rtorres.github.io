"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/data/site-config";

// TODO: Add your community building activities.
const communityBuilding = [
  {
    role: "YOUR_ROLE", // TODO: e.g. "Founder, Example Research Community"
    org: "YOUR_ORG_URL_OR_NAME", // TODO: e.g. "example-community.github.io"
    year: "YYYY",
    link: "https://YOUR_COMMUNITY_URL", // TODO: remove field if no link
    description: "YOUR_DESCRIPTION", // TODO: what the community is and your role in it
    blogLink: "https://YOUR_BLOG_POST_LINK", // TODO: remove field if no blog post
  },
];

// TODO: Add your advocacy and policy activities.
const advocacyAndPolicy = [
  {
    role: "YOUR_ADVOCACY_ROLE", // TODO: e.g. "Workshop Delegate"
    org: "YOUR_ORG", // TODO: e.g. "City, State" or "Organization Name"
    year: "YYYY",
    description: "YOUR_DESCRIPTION",
  },
];

// TODO: Add your mentees. Remove the whole mentees section below if unused.
const mentees = [
  {
    name: "MENTEE_NAME", // TODO: e.g. "Jane Doe"
    role: "MENTEE_ROLE", // TODO: e.g. "Undergraduate Researcher"
    institution: "MENTEE_INSTITUTION", // TODO: e.g. "Example University"
    focus: "MENTEE_RESEARCH_FOCUS", // TODO: e.g. "Computer Vision"
    link: "https://MENTEE_WEBSITE", // TODO: remove field if no website
    cycle: "YYYY–YYYY", // TODO: mentorship period e.g. "2024–2025"
  },
];

interface ServiceItem {
  role: string;
  org: string;
  year: string;
  link?: string;
  description?: string;
  blogLink?: string;
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <div className="border border-border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-sm font-medium text-foreground">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              {item.role}
            </a>
          ) : (
            item.role
          )}
        </h3>
        <span className="font-mono text-xs text-foreground-quaternary shrink-0">
          {item.year}
        </span>
      </div>
      <p className="text-xs text-foreground-tertiary">{item.org}</p>
      {item.description && (
        <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
          {item.description}
        </p>
      )}
      {item.blogLink && (
        <a
          href={item.blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent text-xs mt-2 inline-block"
        >
          Read the full story &rarr;
        </a>
      )}
    </div>
  );
}

export function ServiceContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Service & Outreach"
          description="Professional service, community building, and mentorship."
        />

        {/* Community Building */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Community Building
            </h2>
            <div className="space-y-4">
              {communityBuilding.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Advocacy & Policy */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Advocacy & Policy
            </h2>
            <div className="space-y-4">
              {advocacyAndPolicy.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Mentorship */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Mentorship
            </h2>
            <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed max-w-prose">
              {/* TODO: Replace with your own mentorship description */}
              <p>
                YOUR_MENTORSHIP_DESCRIPTION
              </p>
              <p className="text-foreground-tertiary text-xs">
                If you think I can help, feel free to{" "}
                <a href={`mailto:${siteConfig.email}`} className="link-accent">
                  reach out
                </a>
                .
              </p>
            </div>

            <h3 className="font-mono text-xs tracking-widest uppercase text-foreground-quaternary mt-10 mb-6">
              Current & Past Mentees
            </h3>
            <div className="space-y-4">
              {mentees.map((mentee, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {mentee.link ? (
                        <a
                          href={mentee.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent"
                        >
                          {mentee.name}
                        </a>
                      ) : (
                        mentee.name
                      )}
                    </h4>
                    <span className="font-mono text-xs text-foreground-quaternary">
                      {mentee.cycle}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-secondary">{mentee.role}</p>
                  <p className="text-xs text-foreground-tertiary">{mentee.institution}</p>
                  <p className="text-xs text-foreground-quaternary mt-2">
                    Research: {mentee.focus}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
