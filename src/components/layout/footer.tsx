import { siteConfig } from "@/data/site-config";

const socialLinks = [
  { name: "Scholar", href: siteConfig.social.googleScholar },
  { name: "GitHub", href: siteConfig.social.github },
  { name: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "Email", href: `mailto:${siteConfig.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background print:hidden" role="contentinfo">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-5 text-center">

          {/* Social links — text only */}
          <nav
            className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-xs"
            aria-label="Social links"
          >
            {socialLinks.map((link, i) => (
              <span key={link.name} className="flex items-center gap-3">
                <a
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="text-foreground-tertiary hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                >
                  {link.name}
                </a>
                {i < socialLinks.length - 1 && (
                  <span className="text-foreground-quaternary" aria-hidden>·</span>
                )}
              </span>
            ))}
          </nav>

          {/* Identity line */}
          <p className="font-mono text-[0.65rem] text-foreground-quaternary tracking-wider uppercase">
            Ramon Torres · UC Santa Cruz · {year}
          </p>

          {/* Template credit */}
          <p className="font-mono text-[0.6rem] text-foreground-quaternary">
            Design based on a template by{" "}
            <a
              href="https://github.com/MoMoDawoud/momodawoud.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-150"
            >
              Mohamed Dawoud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
