import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-sanctuary.jpg";
import remembranceImg from "@/assets/remembrance-candle.jpg";
import communityImg from "@/assets/community-hands.jpg";
import aboutImg from "@/assets/about-cloth.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "worship", label: "Schedule" },
  { id: "remembrance", label: "Remembrance" },
  { id: "community", label: "Community" },
  { id: "visit", label: "Visit" },
];

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-olive/50 ${className}`}>
      <span className="h-px w-10 bg-olive/30" />
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
        <circle cx="5" cy="5" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-olive/30" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-lg tracking-wide text-olive-deep">Global Faith</span>
          <span className="font-serif text-xs italic tracking-[0.25em] uppercase text-olive/70">Temple</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm tracking-wide text-foreground/75 transition-colors hover:text-olive"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          className="hidden rounded-sm border border-olive/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-olive transition-all hover:bg-olive hover:text-primary-foreground md:inline-block"
        >
          Plan a visit
        </a>
        <button
          aria-label="Menu"
          className="md:hidden text-olive"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-ivory/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-2 text-sm tracking-wide text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-fit rounded-sm border border-olive/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-olive"
            >
              Plan a visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Soft sunlight streaming through sanctuary windows"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/55 via-ivory/35 to-ivory" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/40 via-transparent to-ivory/20" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-40 text-center">
        <p className="fade-up mb-8 text-xs uppercase tracking-[0.4em] text-olive/80">
          In service of peace · in memory of allies
        </p>
        <h1 className="fade-up font-serif text-5xl leading-[1.05] text-olive-deep sm:text-6xl md:text-5xl lg:text-6xl">
          Eight Nations, <br className="block md:hidden" />One Sacred Legacy
        </h1>
        <h1 className="fade-up font-serif text-5xl leading-[1.05] text-olive-deep sm:text-4xl md:text-3xl lg:text-4xl text-pretty">
          Honoring the Fallen Allies of the Vietnam War
        </h1>
        <p className="fade-up mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg text-pretty">
          Global Faith Temple is a quiet sanctuary dedicated to the soldiers of the
          eight allied nations — the Republic of Vietnam, the United States, South Korea,
          Australia, New Zealand, Thailand, the Philippines, and the Republic of China —
          who stood together in the Vietnam War.
        </p>
        <div className="fade-up mt-10 flex flex-col items-center gap-4">
          <a
            href="#visit"
            className="inline-flex items-center gap-3 rounded-sm border border-olive/50 bg-ivory/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-olive-deep transition-all hover:bg-olive hover:text-primary-foreground"
          >
            Plan your visit
          </a>
          <a href="#about" className="text-xs uppercase tracking-[0.3em] text-olive/70 hover:text-olive">
            ↓ Continue
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Ornament className="fade-up mb-10" />
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="fade-up md:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-olive/70">A welcome</p>
            <h2 className="font-serif text-4xl leading-tight text-olive-deep md:text-5xl">
              Whoever you are, whatever you carry — there is room here.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground/80">
              <p>
                Our doors are open to veterans and their families, to descendants of the
                fallen, and to all who come in remembrance. We hold space for the
                soldiers of the eight allied nations who served in the Vietnam War, and
                for the quiet work of carrying their memory forward.
              </p>
              <p>
                There is no test to pass at our threshold. Only an invitation to sit, to
                breathe, and to be received in peace — beside neighbors who once stood
                beside one another.
              </p>
              <p className="font-serif italic text-olive">— The Stewards of Global Faith Temple</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["Peace", "Earned in sacrifice, kept in stillness"],
                ["Remembrance", "Eight nations, one shared honor"],
                ["Service", "For veterans and their families"],
                ["Community", "A table with room for all"],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-olive/20 pt-4">
                  <p className="font-serif text-lg text-olive-deep">{t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="A folded cloth resting on weathered stone"
                width={1080}
                height={1440}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 font-serif text-xs italic tracking-wide text-muted-foreground">
              "We hold their memory with love — eight nations, one peace."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Worship() {
  const services = [
    { day: "Sunday", time: "8:30 AM", title: "Morning Reflection", note: "Quiet liturgy & song" },
    { day: "Sunday", time: "10:30 AM", title: "Gathering Service", note: "All are welcome" },
    { day: "Wednesday", time: "7:00 PM", title: "Evening Prayer", note: "Candlelit, contemplative" },
    { day: "Friday", time: "12:00 PM", title: "Hour of the Allies", note: "For the eight allied nations" },
    { day: "Saturday", time: "9:00 AM", title: "Veterans' Quiet Hours", note: "The sanctuary is open" },
  ];

  return (
    <section id="worship" className="relative bg-parchment py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="fade-up mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-olive/70">Schedule & services</p>
          <h2 className="font-serif text-4xl text-olive-deep md:text-5xl">A weekly rhythm of stillness</h2>
          <Ornament className="mt-8" />
        </div>

        <ul className="divide-y divide-olive/15 border-y border-olive/15">
          {services.map((s) => (
            <li
              key={s.day + s.time + s.title}
              className="fade-up grid grid-cols-12 items-baseline gap-4 py-6 md:py-8"
            >
              <span className="col-span-4 font-serif text-sm uppercase tracking-[0.2em] text-olive md:col-span-2 md:text-base">
                {s.day}
              </span>
              <span className="col-span-8 font-serif text-sm tracking-wide text-foreground/70 md:col-span-2 md:text-base">
                {s.time}
              </span>
              <span className="col-span-12 font-serif text-2xl text-olive-deep md:col-span-5 md:text-3xl">
                {s.title}
              </span>
              <span className="col-span-12 text-sm italic text-muted-foreground md:col-span-3 md:text-right">
                {s.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Remembrance() {
  return (
    <section id="remembrance" className="relative overflow-hidden bg-olive-deep text-ivory">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative min-h-[60vh] md:min-h-[80vh]">
          <img
            src={remembranceImg}
            alt="A single lit candle beside an olive branch on weathered stone"
            width={1280}
            height={1600}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-olive-deep/70 md:to-olive-deep" />
        </div>
        <div className="flex items-center px-6 py-24 md:px-16 md:py-40">
          <div className="fade-up max-w-lg">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-candle/90">In remembrance</p>
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              For the allies who answered the call —
              <br />
              <em className="not-italic text-candle">we keep the light.</em>
            </h2>
            <p className="mt-8 text-[17px] leading-relaxed text-ivory/80">
              Eight candles burn each day in our sanctuary — one for each allied nation
              whose soldiers gave themselves in the Vietnam War. Their courage shapes our
              peace. Their absence shapes our gratitude.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ivory/80">
              You are welcome to sit beside them, in silence, for as long as you need.
            </p>

            <div className="mt-10 border-l-2 border-candle/60 pl-6">
              <p className="font-serif text-lg italic leading-relaxed text-ivory/95">
                "They shall grow not old, as we that are left grow old…
                <br />
                We will remember them."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-candle/80">
                — From the Ode of Remembrance
              </p>
            </div>

            <a
              href="#visit"
              className="mt-10 inline-flex items-center gap-3 border-b border-candle/60 pb-1 text-xs uppercase tracking-[0.3em] text-candle transition-colors hover:border-candle hover:text-ivory"
            >
              Submit a dedication →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  const items = [
    {
      title: "Gatherings",
      body: "Shared meals, oral-history circles, and the annual remembrance for the eight allied nations.",
    },
    {
      title: "Service & Outreach",
      body: "Quiet, sustained work alongside Vietnam War veterans, their families, and aging comrades in need of care.",
    },
    {
      title: "Pastoral Care",
      body: "A confidential ear for grief, gratitude, and the long memory of war. Always without cost.",
    },
  ];

  return (
    <section id="community" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-olive/70">Community & outreach</p>
          <h1 className="font-serif text-4xl text-olive-deep md:text-5xl text-pretty">
            Faith made visible in small, steady acts.
          </h1>
        </div>

        <div className="grid gap-px overflow-hidden border border-olive/15 bg-olive/15 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="fade-up bg-ivory p-8 md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-olive/70">— {it.title}</p>
              <p className="font-serif text-2xl leading-snug text-olive-deep">{it.body}</p>
            </div>
          ))}
        </div>

        <div className="fade-up mt-20 grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <img
              src={communityImg}
              alt="Hands clasped together in quiet solidarity"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-2xl leading-relaxed text-olive-deep">
              "Be kind, for everyone you meet is fighting a hard battle."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-olive/70">A guiding word</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reflection() {
  return (
    <section className="relative bg-parchment py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Ornament className="fade-up mb-10" />
        <p className="fade-up font-serif text-3xl italic leading-relaxed text-olive-deep md:text-4xl">
          "Peace I leave with you; my peace I give to you. Let not your hearts be troubled,
          neither let them be afraid."
        </p>
        <p className="fade-up mt-8 text-xs uppercase tracking-[0.3em] text-olive/70">A blessing for the day</p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-olive/70">Plan your visit</p>
          <h2 className="font-serif text-4xl text-olive-deep md:text-5xl">
            The doors are open. You are expected.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="fade-up space-y-8 md:col-span-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-olive/70">Where to find us</p>
              <p className="mt-3 font-serif text-2xl text-olive-deep">
                17320 N. Mesa Dr.
                <br />
                Pauma Valley, CA 92061
              </p>
            </div>
            <div className="hairline-divider" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-olive/70">Sanctuary hours</p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Monday – Saturday · 7:00 AM – 8:00 PM
                <br />
                Sunday · 7:00 AM – 9:00 PM
              </p>
            </div>
            <div className="hairline-divider" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-olive/70">Contact</p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                info@tvwam.org
                <br />
                +1 (714) 277-0284
              </p>
            </div>
          </div>

          <form
            className="fade-up md:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert("Thank you. Your message has been received in peace.");
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-6">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-6">
              <label className="block text-xs uppercase tracking-[0.3em] text-olive/70">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full resize-none border-b border-olive/30 bg-transparent py-2 font-serif text-lg text-olive-deep outline-none transition-colors placeholder:text-foreground/40 focus:border-olive"
                placeholder="A word, a question, a remembrance…"
              />
            </div>
            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-3 rounded-sm border border-olive/50 bg-olive px-8 py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-olive-deep"
            >
              Send with peace
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.3em] text-olive/70">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-olive/30 bg-transparent py-2 font-serif text-lg text-olive-deep outline-none transition-colors focus:border-olive"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-olive-deep text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-ivory">Global Faith Temple</p>
            <p className="mt-2 font-serif text-xs italic tracking-[0.25em] uppercase text-candle/80">
              In peace · in remembrance
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-ivory/70 hover:text-candle">
                {n.label}
              </a>
            ))}
          </div>
          <p className="font-serif italic leading-relaxed text-ivory/70 md:text-right">
            "May the road rise up to meet you, and may peace dwell within your house."
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row">
          <span>© {new Date().getFullYear()} Global Faith Temple. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Held in gratitude</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="bg-ivory text-foreground">
      <Nav />
      <Hero />
      <About />
      <Worship />
      <Remembrance />
      <Community />
      <Reflection />
      <Visit />
      <Footer />
    </main>
  );
}
