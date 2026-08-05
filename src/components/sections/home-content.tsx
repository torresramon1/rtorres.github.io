"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, useReducedMotion } from "framer-motion";
import { TiltCard } from "@/components/interactive/tilt-card";

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */

const ongoingProjects = [
  {
    title: "AI Privacy & Regulation Study",
    collaborators: ["RANDLab (UCSC)", "Stanford University"],
    summary: "How do practitioners navigate privacy when building AI products under emerging regulations?",
    highlights: [
      "Confidential one-hour interviews with industry professionals",
      "Covering the EU AI Act, CCPA, GDPR, and evolving US state laws",
      "Participants span privacy, compliance, engineering, and risk roles",
      "Centering practitioner experience to inform policy recommendations",
    ],
    status: "Recruiting Participants",
    tags: ["AI Governance", "Privacy", "Regulation", "Practitioner Study"],
    link: "https://randlab.engineering.ucsc.edu/aigov-study/",
    irb: "UC Santa Cruz IRB HS-FY2026-108",
  },
];

/* ─────────────────────────────────────────
   SECTION HEADING WITH "VIEW ALL" LINK
   ───────────────────────────────────────── */

function SectionHeading({ title, href, id }: { title: string; href?: string; id?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-6">
      <h2 id={id} className="text-xl font-bold tracking-tight">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-xs font-mono text-foreground-tertiary hover:text-accent transition-colors duration-150 flex items-center gap-1"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN
   ───────────────────────────────────────── */

export function HomeContent() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════
            PROFILE
            ═══════════════════════════════════════ */}
        <FadeIn direction="none">
          <section className="pb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Profile photo with 3D tilt */}
            <TiltCard className="flex-shrink-0" maxTilt={8}>
              <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src="/profile_pic.jpeg"
                  alt={siteConfig.name}
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </TiltCard>

            {/* Bio */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                {siteConfig.name}
              </h1>

              {/* Affiliation badge */}
              <p className="font-mono text-xs text-foreground-quaternary tracking-wide mb-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle" />
                PhD Student · UC Santa Cruz
              </p>


              <div className="space-y-3 text-base text-foreground-secondary leading-relaxed">
                <p>
                  I am a PhD student in Computer Science & Engineering at{" "}
                  <a href="https://www.ucsc.edu" target="_blank" rel="noopener noreferrer" className="gradient-link">
                    UC Santa Cruz
                  </a>
                  , working with{" "}
                  <a href={siteConfig.advisor.url} target="_blank" rel="noopener noreferrer" className="gradient-link">
                    Prof. Ram Sundara Raman
                  </a>
                  . I study the sociotechnical dimensions of AI-enabled privacy risks and abuse, and how they impact people and society. I am particularly interested in how AI facilitates new forms of harm — such as non-consensual deepfakes, synthetic media generation, and the commodification of abuse services — and in how the stakeholders affected by these threats understand, misinterpret, and struggle to keep pace with them: how everyday users form mental models of digital protections, how engineers and practitioners weigh privacy trade-offs under regulatory pressure, and how policymakers interpret ambiguous or conflicting frameworks. I use large-scale internet measurements, qualitative interviews, and controlled experiments to surface these misalignments. I am equally driven by the complementary question: can AI itself be turned into a tool for defense? I explore how the same technology that enables harm can also empower users to recognize and resist threats, help practitioners build safer systems under regulatory uncertainty, and provide policymakers with the empirical grounding they need to act.
                </p>
              </div>

              {/* Social links — moved up into bio */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-4 text-sm justify-center sm:justify-start">
                <a href={siteConfig.social.googleScholar} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  Scholar
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  GitHub
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="gradient-link text-foreground-tertiary">
                  LinkedIn
                </a>
                <span className="text-foreground-quaternary">&middot;</span>
                <a href={`mailto:${siteConfig.email}`} className="gradient-link text-foreground-tertiary">
                  Email
                </a>
              </div>
            </div>
          </section>
        </FadeIn>


        {/* ═══════════════════════════════════════
            PLACEHOLDER — content coming soon
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.05}>
          <section className="mb-16" aria-labelledby="section-placeholder">
            <h2 id="section-placeholder" className="text-xl font-bold tracking-tight mb-3">
              More Coming Soon
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              News, publications, and blog posts are being updated — check back soon.
            </p>
          </section>
        </FadeIn>

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            ONGOING PROJECTS
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.08}>
          <section className="mb-16" aria-labelledby="section-projects">
            <SectionHeading title="Ongoing Projects" id="section-projects" />

            <div className="space-y-6">
              {ongoingProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="group card-hover block rounded-xl border border-border hover:border-accent/30 hover:bg-accent-subtle overflow-hidden"
                >
                  {/* Header bar */}
                  <div className="px-5 py-4 border-b border-border bg-muted/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                        <h3 className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors duration-150">
                          {project.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-accent font-medium tracking-wide uppercase">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-secondary mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 space-y-4">
                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground-secondary">
                          <span className="w-1 h-1 rounded-full bg-foreground-quaternary mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Footer: collaborators + tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.collaborators.map((c, i) => (
                          <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-xs font-mono text-foreground-tertiary">
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-foreground-quaternary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── divider ── */}
        <hr className="border-border mb-16" />

        {/* ═══════════════════════════════════════
            LET'S COLLABORATE
            ═══════════════════════════════════════ */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16" aria-labelledby="section-collaborate">
            <h2 id="section-collaborate" className="text-xl font-bold tracking-tight mb-3">
              Let&apos;s Collaborate
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-5 max-w-xl">
              I&apos;m always open to collaborations on security, privacy, and AI research.
              If you have an idea, a dataset, or just want to chat — reach out.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/30 text-sm font-medium transition-colors duration-150 hover:bg-accent-subtle"
            >
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
