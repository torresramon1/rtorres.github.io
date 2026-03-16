"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/data/site-config";

// TODO: Add your courses here. Add or remove objects as needed.
const courses = [
  {
    semester: "YOUR_SEMESTER", // TODO: e.g. "Spring 2025"
    role: "YOUR_ROLE", // TODO: e.g. "Lead Graduate Teaching Assistant" or "Instructor"
    code: "YOUR_COURSE_CODE", // TODO: e.g. "CS 101"
    title: "YOUR_COURSE_TITLE", // TODO: e.g. "Introduction to Programming"
    institution: "YOUR_INSTITUTION", // TODO: e.g. "University of Example"
    instructor: "YOUR_INSTRUCTOR", // TODO: e.g. "Prof. Jane Doe" — remove field if you were the instructor
    highlights: [
      "YOUR_HIGHLIGHT_1", // TODO: bullet point describing what you did or taught
      "YOUR_HIGHLIGHT_2",
    ],
  },
];

export function TeachingContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Teaching"
          description="Courses, teaching philosophy, and classroom experience."
        />

        {/* Teaching */}
        <FadeIn direction="none">
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Teaching
            </h2>
            {courses.map((course) => (
              <div key={course.code} className="mb-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-semibold text-sm">
                    <span className="font-mono">{course.code}</span>: &lsquo;{course.title}&rsquo;
                  </h3>
                  <span className="font-mono text-xs text-foreground-tertiary">{course.semester}</span>
                </div>
                <p className="text-sm text-foreground-secondary mb-1">
                  {course.role} — {course.institution}
                </p>
                {course.instructor && (
                  <p className="font-mono text-xs text-foreground-quaternary mb-3">
                    Instructor: {course.instructor}
                  </p>
                )}
                <ul className="space-y-1.5 text-sm text-foreground-secondary">
                  {course.highlights.map((h, i) => (
                    <li key={i} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-foreground-quaternary">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </FadeIn>

        {/* Teaching Philosophy */}
        <FadeIn direction="none" delay={0.1}>
          <section className="mb-16">
            <h2 className="font-serif text-xl font-semibold tracking-tight mb-6 pb-2 border-b border-border">
              Teaching Philosophy
            </h2>
            <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed max-w-prose">
              {/* TODO: Replace with your own teaching philosophy */}
              <p>
                YOUR_TEACHING_PHILOSOPHY_PARAGRAPH_1
              </p>
              <p>
                YOUR_TEACHING_PHILOSOPHY_PARAGRAPH_2
              </p>
            </div>

            {/* TODO: Replace with a real student quote, or remove this block */}
            <div className="my-10 py-8 px-6 text-center">
              <blockquote className="font-serif italic text-lg sm:text-xl text-foreground-secondary mb-4 max-w-lg mx-auto">
                &ldquo;YOUR_STUDENT_QUOTE&rdquo;
              </blockquote>
              <p className="font-mono text-xs text-foreground-quaternary tracking-wide">
                — YOUR_QUOTE_ATTRIBUTION {/* TODO: e.g. "Student feedback, Spring 2025" */}
              </p>
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="none" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            {/* TODO: Update this link or remove it */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-accent font-medium"
            >
              Discuss collaboration
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
