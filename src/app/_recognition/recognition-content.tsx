"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";

// TODO: Add your fellowships, awards, and scholarships here.
const fellowships = [
  {
    year: "YYYY–YYYY", // TODO: e.g. "2021–2024"
    title: "YOUR_AWARD_TITLE", // TODO: e.g. "NSF Graduate Research Fellowship"
    org: "YOUR_AWARDING_ORG", // TODO: e.g. "National Science Foundation"
    detail: "YOUR_AWARD_DETAIL", // TODO: brief description of the award and criteria
  },
];

// TODO: Add press coverage, features, spotlights, etc. Remove section if unused.
const mediaCoverage = [
  {
    date: "Mon YYYY", // TODO: e.g. "Apr 2025"
    title: "YOUR_MEDIA_TITLE", // TODO: article or feature title
    outlet: "YOUR_MEDIA_OUTLET", // TODO: e.g. "Example University News"
    description: "YOUR_MEDIA_DESCRIPTION", // TODO: brief summary
    link: "https://YOUR_MEDIA_LINK", // TODO: link to the article — remove field if none
  },
];

export function RecognitionContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Recognition"
          description="Fellowships, media coverage, and features."
        />

        {/* Fellowships */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Fellowships & Awards
            </h2>
            <div className="space-y-4">
              {fellowships.map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                    <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-tertiary">{item.org}</p>
                  {item.detail && (
                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Media Coverage */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Media Coverage
            </h2>
            <div className="space-y-4">
              {mediaCoverage.map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm font-medium text-foreground">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <span className="font-mono text-xs text-foreground-quaternary shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-tertiary">{item.outlet}</p>
                  {item.description && (
                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
