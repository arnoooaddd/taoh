import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Video,
  BarChart3,
  Users2,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";

/**
 * The Alpha Omega Hub
 * Single-file landing page inspired by the structure/style of agendac.fr,
 * adapted for a US audience.
 *
 * - Tailwind CSS required
 * - Works in Next.js or any React SPA
 * - Replace copy, numbers, and assets as needed
 */

const BRAND = {
  white: "#FEFEFE",
  blue: "#002366",
};

const LOGO_URL =
  "https://drive.usercontent.google.com/download?id=180NDIGNV8pDgKgp3gdf55XTviqtYOrX2";

const YT_SHORT_URL = "https://www.youtube.com/embed/Y68enwjao4k";

const NAV = [
  { label: "Services", id: "services" },
  { label: "Results", id: "results" },
  { label: "Team", id: "team" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Performance Ads Built for Home Services",
    points: [
      "Solar, HVAC, roofing, remodeling, insulation, windows and more",
      "Meta + Google-first strategy tuned to your local markets",
      "Quality controls baked into every step of the funnel",
    ],
  },
  {
    icon: Video,
    title: "Content That Looks Like Content",
    points: [
      "On-site shoots, technician stories, customer interviews",
      "Short-form + long-form deliverables engineered for ads",
      "A consistent, high-trust visual identity across markets",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Brand-First, Compliance-Safe Messaging",
    points: [
      "Position you as the premium local choice",
      "Avoid gimmicks, recycled leads, and risky promises",
      "Build long-term credibility that improves close rate",
    ],
  },
  {
    icon: Users2,
    title: "Pay-Per-Appointment Growth Partner",
    points: [
      "No long-term lock-ins",
      "Appointments booked directly into your calendar",
      "We earn retention through performance",
    ],
  },
];

const RESULTS = [
  {
    metric: "400%",
    label: "Average ROI reported by partners",
  },
  {
    metric: "30 days",
    label: "First results target after launch",
  },
  {
    metric: "$2M+",
    label: "Annual revenue sweet spot",
  },
];

const TEAM = [
  {
    name: "Arno Adornier",
    role: "CEO",
    bio: "Leads strategy and partner outcomes for Home Services brands with a focus on clarity, speed, and quality.",
    image: "https://raw.githubusercontent.com/arnoooaddd/taoh/main/3.png",
  },
  {
    name: "Kerim Jakupovic",
    role: "COO",
    bio: "A senior-only operator group building local performance systems that scale without sacrificing trust.",
    image: "https://raw.githubusercontent.com/arnoooaddd/taoh/main/4.png",
  },
  {
    name: "Gabriel Gonzales",
    role: "CMO",
    bio: "A tight in-house-style team producing premium creative that looks native to the feeds and converts.",
    image: "https://raw.githubusercontent.com/arnoooaddd/taoh/main/5.png",
  },
];

const FAQ = [
  {
    q: "Do you sell leads?",
    a: "No. We do not sell recycled or shared leads. We build your acquisition engine so you own the pipeline, the data, and the trust.",
  },
  {
    q: "Who is this for?",
    a: "Home Services companies doing roughly $2M+ annually that want a brand-first appointment system.",
  },
  {
    q: "What makes your ads different?",
    a: "We lead with trust. Our creative looks like real content, not a generic ad, so prospects feel familiar with you before they book.",
  },
  {
    q: "How fast can we see traction?",
    a: "We aim to generate your first measurable results within around 30 days of launch, then scale what works with weekly iterations.",
  },
  {
    q: "How does pricing work?",
    a: "Most partners combine a focused monthly retainer with our pay-per-appointment model and a clear media budget. You'll get a straightforward quote after a short audit.",
  },
];


function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function AnchorLink({ id, children, className, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={classNames(
        "text-sm font-medium text-zinc-700 hover:text-zinc-950 transition",
        className
      )}
    >
      {children}
    </a>
  );
}

function SectionBadge({ children }) {
  return (
    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
      {children}
    </span>
  );
}


// Elfsight widgets
let elfsightScriptInjected = false;

function useElfsightScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (elfsightScriptInjected) return;

    const existing = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (existing) {
      elfsightScriptInjected = true;
      return;
    }

    const s = document.createElement("script");
    s.src = "https://elfsightcdn.com/platform.js";
    s.async = true;
    document.head.appendChild(s);
    elfsightScriptInjected = true;
  }, []);
}

function ElfsightApp({ appId }) {
  useElfsightScript();
  return <div className={`elfsight-app-${appId}`} data-elfsight-app-lazy="" />;
}

const ELFSIGHT_REVIEWS_APP = "7b392c24-b2f9-41a6-a0a1-e7b021fe02f7";
const ELFSIGHT_LOGOS_APP = "b1e000b2-31a9-48e4-8175-d63a0e2fdacd";

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-zinc-200 p-5" style={{ backgroundColor: '#FFFFFF' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left hover:bg-zinc-50 transition-colors"
        style={{ backgroundColor: '#FFFFFF', color: '#18181B' }}
      >
        <span className="text-base font-semibold" style={{ color: '#18181B' }}>{q}</span>
        <ChevronDown
          className={classNames(
            "h-5 w-5 transition-transform flex-shrink-0",
            open && "rotate-180"
          )}
          style={{ color: '#52525B' }}
        />
      </button>
      <div
        className={classNames(
          "grid transition-all",
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed" style={{ color: '#3F3F46' }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function AlphaOmegaHubLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    setMounted(true);
    
    // Load Typeform script
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div
      className="min-h-screen text-zinc-900"
      style={{ backgroundColor: BRAND.white }}
    >

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white border border-zinc-200 overflow-hidden flex items-center justify-center shadow-sm">
                {/* Logo image if available */}
                <img
                  src={LOGO_URL}
                  alt="The Alpha Omega Hub logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // graceful fallback if external image is blocked
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-[10px] font-bold tracking-widest text-zinc-900">
                  AO
                </span>
              </div>
              <div className="leading-none">
                <div className="text-sm font-semibold tracking-tight">
                  The Alpha Omega Hub
                </div>
                <div className="text-[10px] text-zinc-500">
                  Home Services Growth Accelerator
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((n) => (
                <AnchorLink key={n.id} id={n.id}>
                  {n.label}
                </AnchorLink>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BRAND.blue, color: '#FFFFFF' }}
              >
                Book a quick call
                <ArrowRight className="h-4 w-4" style={{ color: '#FFFFFF' }} />
              </a>
            </nav>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-nav"
            className={classNames(
              "md:hidden overflow-hidden transition-all",
              mobileOpen ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-2 pt-2">
              {NAV.map((n) => (
                <AnchorLink
                  key={n.id}
                  id={n.id}
                  className="rounded-lg px-2 py-2 hover:bg-zinc-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.label}
                </AnchorLink>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BRAND.blue, color: '#FFFFFF' }}
              >
                Book a quick call
                <ArrowRight className="h-4 w-4" style={{ color: '#FFFFFF' }} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="top" className="relative">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-b border-zinc-200">
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge>Tampa Bay-based • US nationwide</SectionBadge>
            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Stop burning your hard-earned cash on shared leads and{" "}
              <span style={{ color: BRAND.blue }}>low-trust agencies</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              The Alpha Omega Hub is a growth accelerator for Home Services
              companies doing <strong>$2M+ annually</strong>. We help you build a high-trust digital presence and turn it into
              appointments booked directly into your calendar.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BRAND.blue, color: '#FFFFFF' }}
              >
                See how it works
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#FFFFFF' }} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold border-2 border-zinc-300 bg-white hover:bg-zinc-50 transition-colors"
                style={{ color: '#18181B' }}
              >
                Request a quick audit
              </a>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-600">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: BRAND.blue }} />
                Avg. ROI: ~400%
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Pay-per-appointment</span>
              <span className="hidden sm:inline">•</span>
              <span>Home Services only</span>
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS - BELOW HERO */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 border-b border-zinc-200">
          <div className="w-full">
            {mounted && <ElfsightApp appId={ELFSIGHT_REVIEWS_APP} />}
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 border-b border-zinc-200">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center">
              <div
                className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white flex items-center justify-center"
                style={{ backgroundColor: BRAND.blue }}
              >
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">No recycled leads</h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                We build your engine. You own the pipeline and data.
              </p>
            </div>
            <div className="text-center">
              <div
                className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white flex items-center justify-center"
                style={{ backgroundColor: BRAND.blue }}
              >
                <Video className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Content that converts</h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                Real technicians, real customers, real proof.
              </p>
            </div>
            <div className="text-center">
              <div
                className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white flex items-center justify-center"
                style={{ backgroundColor: BRAND.blue }}
              >
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Pay-per-appointment</h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                We focus on booked opportunities, not vanity metrics.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-b border-zinc-200">
        <div className="text-center mb-8 sm:mb-12">
          <SectionBadge>What we deliver</SectionBadge>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            A full-funnel growth stack for serious Home Services brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
            If you're already doing $2M+ and want a clearer, safer,
            higher-quality pipeline, this is built for you.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border border-zinc-200 p-4 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="h-10 w-10 sm:h-12 sm:w-12 text-white flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.blue }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{s.title}</h3>
                    <ul className="space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm sm:text-base text-zinc-600">
                          <Check className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: BRAND.blue }} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-b border-zinc-200">
        <div className="text-center mb-8 sm:mb-12">
          <SectionBadge>Results</SectionBadge>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            Built for quality, not volume
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
            We aim to deliver a predictable appointment engine with stronger trust
            and higher downstream close rates.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-12 sm:mb-16">
          {RESULTS.map((r) => (
            <div
              key={r.metric}
              className="text-center p-6 sm:p-8 border border-zinc-200"
              style={{ backgroundColor: BRAND.blue, color: 'white' }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{r.metric}</div>
              <div className="text-xs sm:text-sm opacity-90">{r.label}</div>
            </div>
          ))}
        </div>

        {/* LOGO SHOWCASE */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <SectionBadge>Our Clients</SectionBadge>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold">
              Brands and teams we've supported
            </h3>
          </div>
          <div className="w-full overflow-x-auto">
            {mounted && <ElfsightApp appId={ELFSIGHT_LOGOS_APP} />}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-b border-zinc-200">
        <div className="text-center mb-8 sm:mb-12">
          <SectionBadge>Our Team</SectionBadge>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            Same standards — now built for the US
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
            You'll work with a senior team and a specialized creative studio,
            not a rotating pool of junior account managers.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {TEAM.map((t) => (
            <div
              key={t.name}
              className="border border-zinc-200 p-4 sm:p-6 text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="h-24 w-24 sm:h-32 sm:w-32 mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="text-base sm:text-lg font-semibold">{t.name}</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">{t.role}</div>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-b border-zinc-200">
        <div className="text-center mb-8 sm:mb-12">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            Answers upfront
          </h2>
        </div>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {FAQ.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="border border-zinc-200 p-6 sm:p-8 md:p-12">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            <div>
              <SectionBadge>Contact Us</SectionBadge>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
                If you know how to close, we'll help you fill the calendar
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-600">
                We're based in Tampa Bay, Florida, and help Home Services leaders
                nationwide. Share your market and current setup and we'll respond
                with a clear recommendation.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-sm sm:text-base text-zinc-700">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">(727) 358-8135</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-zinc-700">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium break-all">contact@thealphaomegahub.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-zinc-700">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Tampa Bay, FL • US nationwide (remote-first)</span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
                {["Solar", "HVAC", "Roofing", "Remodeling", "Insulation", "Windows"].map(
                  (n) => (
                    <span
                      key={n}
                      className="text-xs border border-zinc-200 px-2 sm:px-3 py-1 font-semibold text-zinc-600"
                    >
                      {n}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Typeform embed */}
            <div>
              <div className="border border-zinc-200 bg-zinc-50 p-4 sm:p-6">
                <div className="text-base sm:text-lg font-semibold mb-2">Request a quick audit</div>
                <p className="text-xs sm:text-sm text-zinc-600 mb-4 sm:mb-6">
                  Fill out the form below to get started.
                </p>
                <div>
                  {mounted && <div data-tf-live="01KBRX8J6JBX6RQGSAMDTW4N7Z"></div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 border border-zinc-200 overflow-hidden flex items-center justify-center">
                <img
                  src={LOGO_URL}
                  alt="The Alpha Omega Hub logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-900">
                  AO
                </span>
              </div>
              <div>
                <div className="text-sm sm:text-base font-semibold">The Alpha Omega Hub</div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  Home Services Growth Accelerator
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:justify-end">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-900"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500">
            <div>© {year} The Alpha Omega Hub. All rights reserved.</div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#" className="hover:text-zinc-900">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-900">Terms</a>
              <a href="#" className="hover:text-zinc-900">Accessibility</a>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-zinc-400">
            Performance claims are illustrative. Results depend on market, offer,
            and sales execution.
          </div>
        </div>
      </footer>
    </div>
  );
}