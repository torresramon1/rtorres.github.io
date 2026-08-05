"use client";

import React from "react";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { FadeIn } from "@/components/animations/fade-in";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted border border-border text-xs font-mono text-foreground-tertiary">
      {children}
    </span>
  );
}

function BadgeRow({ badges }: { badges: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {badges.map((b) => (
        <Badge key={b}>{b}</Badge>
      ))}
    </div>
  );
}

// TODO: Replace these timeline items with your own life/career milestones.
// Each item needs: date, title, description. children (badges) are optional.
// Add or remove items as needed — most recent events go at the bottom.
const timelineItems = [
  {
    date: "YYYY", // TODO: year of this milestone
    title: "YOUR_MILESTONE_TITLE", // TODO: e.g. "Born in City, Country"
    description: "YOUR_MILESTONE_DESCRIPTION", // TODO: 1-3 sentence description
    children: <BadgeRow badges={["YOUR_LOCATION"]} />, // TODO: optional — remove children if unused
  },
  {
    date: "YYYY",
    title: "YOUR_NEXT_MILESTONE",
    description: "YOUR_DESCRIPTION",
    children: <BadgeRow badges={["YOUR_INSTITUTION", "YOUR_LOCATION"]} />,
  },
  // TODO: Add more milestones...
];

export function JourneyContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="My Journey"
          description="YOUR_JOURNEY_PAGE_SUBTITLE" // TODO: 1-2 sentence tagline for the page
        />

        {/* Timeline */}
        <section className="mb-16 ml-12 sm:ml-16">
          <Timeline items={timelineItems} variant="minimal" />
        </section>

        {/* Beyond Research — prose style */}
        <section className="mb-16">
          <hr className="mb-12" />
          <FadeIn direction="none">
            <h2 className="font-serif text-2xl font-semibold tracking-tight mb-6">
              Beyond Work {/* TODO: rename this section if desired */}
            </h2>
            <div className="space-y-4 font-serif text-foreground-secondary leading-relaxed">
              {/* TODO: Replace with your own personal paragraph */}
              <p>
                YOUR_PERSONAL_PARAGRAPH_1
              </p>
              <p>
                YOUR_PERSONAL_PARAGRAPH_2
              </p>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
