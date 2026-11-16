import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Phone } from "lucide-react";
import FaqList from "@/components/FaqList";
import Portfolio from "@/components/Portfolio";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { WhatsAppIcon } from "@/components/icons";
import { Container, CtaBand } from "@/components/ui";
import { locations } from "@/content/locations";
import { getService, services } from "@/content/services";
import { serviceAreaHref, serviceAreas, type ServiceLocationPage } from "@/content/service-locations";
import { SITE_URL, site, whatsappLink } from "@/content/site";

/** Cards linking to the specialist pages for one area. `exclude` hides the page you're already on. */
export function SpecialistCards({ l, name, exclude }: { l: (typeof locations)[number]; name: string; exclude?: string }) {
  const cards = [
    { href: `/${l.slug}`, title: `Architects in ${name}`, text: `House plans, elevations, approvals and construction in ${name}.`, image: getService("architectural-design")!.image, key: "architects" },
    ...serviceAreas.map((sa) => ({ href: serviceAreaHref(sa.key, l), title: `${sa.label} in ${name}`, text: sa.card(name), image: getService(sa.serviceSlug)!.image, key: sa.key })),
  ].filter((c) => c.key !== exclude);

  return (
    <ul className={`mt-10 grid gap-6 sm:grid-cols-2 ${cards.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {cards.map((c, i) => (
        <li key={c.href} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}>
          <Link href={c.href} className="lift zoom group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white hover:border-brand-200">
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image quality={90} src={c.image} alt={`${c.title} by BBMC`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">{c.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-60">{c.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                View page <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceLocationView({ page }: { page: ServiceLocationPage }) {
  const { sa, l, name } = page;
  const service = getService(sa.serviceSlug)!;
  const nearby = locations.filter((x) => x.slug !== l.slug && l.nearby.includes(x.area));
  const others = services.filter((s) => s.slug !== sa.serviceSlug).slice(0, 6);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-ink pt-18 text-white">
        <Image quality={90} src={page.image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" aria-hidden="true" />
        <Container className="relative py-16 lg:py-24">
          <div className="[&_a]:text-white/70 [&_span]:text-white/70 [&_[aria-current]]:text-white">
            <Breadcrumbs items={[{ name: "Locations", href: "/locations" }, { name, href: `/${l.slug}` }, { name: sa.label, href: `/${page.slug}` }]} />
          </div>
          <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200 animate-rise">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {l.areas ? `${l.areas.length} neighbourhoods` : `${name}, ${l.region ?? "Hyderabad"}`}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl animate-rise">
            {sa.label} in {name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 animate-rise" style={{ animationDelay: "100ms" }}>
            {sa.heroLine({ name, l, where: name })}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phones[0].tel}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 font-semibold text-white transition-colors duration-200 hover:bg-brand-800">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
            </a>
            <a href={whatsappLink(`Hi BBMC, I'm looking for ${sa.label.toLowerCase()} in ${name}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["30+", "Years"],
              ["1500+", "Projects"],
              ["5000+", "Clients"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="sr-only">{k}</dt>
                <dd className="font-display text-3xl font-bold text-white">{v}</dd>
                <dd className="mt-1 text-sm text-white/60">{k}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{sa.label} · {name}</p>
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-ink-80">
              {page.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <aside className="lg:col-span-5" data-reveal>
            <div className="rounded-2xl border border-line p-7">
              <h2 className="font-display text-lg font-bold text-ink">{sa.offerTitle} in {name}</h2>
              <ul className="mt-5 space-y-3">
                {sa.offer.map((f) => (
                  <li key={f} className="flex gap-3 text-ink-80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="link-underline mt-6 inline-block text-sm font-semibold text-brand-700">
                More about {service.title.toLowerCase()} →
              </Link>
              <div className="mt-7 flex gap-3 border-t border-line pt-6 text-sm text-ink-60">
                <MapPin className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <address className="not-italic">
                  <strong className="block text-ink">{site.legalName}</strong>
                  {site.address.lines.join(" ")}
                </address>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Working with our {sa.label.toLowerCase()}</h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((p, i) => (
              <li key={p.step} className="rounded-xl border border-line bg-white p-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <span className="font-display text-sm font-semibold text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{p.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------- Other specialists in this area ---------- */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Also in {name}</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">More BBMC specialists in {name}</h2>
          </div>
          <SpecialistCards l={l} name={name} exclude={sa.key} />
          <ul className="mt-10 flex flex-wrap gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-80 transition-colors duration-200 hover:border-brand-500 hover:text-brand-700">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line py-20 lg:py-24"><Container><Portfolio /></Container></section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-line py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Questions about {sa.label.toLowerCase()} in {name}</h2>
            {nearby.length > 0 && (
              <div className="mt-10" data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-40">{sa.label} nearby</h3>
                <ul className="mt-4 space-y-2">
                  {nearby.map((n) => (
                    <li key={n.slug}>
                      <Link href={serviceAreaHref(sa.key, n)} className="link-underline text-ink-80 hover:text-brand-700">{sa.label} in {n.area.split(" (")[0]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-8"><FaqList faqs={page.faqs} /></div>
        </Container>
      </section>

      <CtaBand title={`Need ${sa.label.toLowerCase()} in ${name}?`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${sa.label} in ${name}`,
          serviceType: service.title,
          description: page.metaDescription,
          url: `${SITE_URL}/${page.slug}`,
          image: `${SITE_URL}${page.image}`,
          areaServed: { "@type": "Place", name: l.region === "Telangana" ? `${name}, Telangana` : `${name}, Hyderabad` },
          provider: { "@id": `${SITE_URL}/#business` },
        }}
      />
    </>
  );
}
