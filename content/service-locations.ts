import type { Faq } from "./services";
import { getService } from "./services";
import { locations, type Location } from "./locations";

// Area pages for individual services: "Civil Engineers in Boduppal", "Vastu Consultants in Uppal", etc.
// Each page mixes the area's own description (from locations.ts) with service-specific text,
// so no two pages are the same text with only the name swapped.

export type ServiceAreaKey = "civil-engineers" | "vastu-consultants" | "interior-designers";

type Ctx = { name: string; l: Location; where: string };

export type ServiceArea = {
  key: ServiceAreaKey;
  serviceSlug: string;
  /** "Civil Engineers" */
  label: string;
  /** Text on the cards that link to these pages */
  card: (name: string) => string;
  heroLine: (c: Ctx) => string;
  lead: (c: Ctx) => string;
  meta: (where: string) => string;
  offerTitle: string;
  offer: string[];
  faqs: (c: Ctx) => Faq[];
};

const listNames = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);

/** How BBMC reaches this area: Boduppal office, a zone, the rest of Hyderabad, or a Telangana town. */
const reach = ({ name, l }: Ctx, what: string) => {
  if (name === "Boduppal") return `Our office is right here in Srinagar Colony, Boduppal, so ${what} can usually be arranged the same day.`;
  if (l.areas) return `We cover all of ${name}, including ${listNames(l.areas.slice(0, 4))}, and ${what} can be arranged from our Boduppal office.`;
  if (l.region === "Telangana") return `For ${name} clients we share drawings over WhatsApp and email, and ${what} is scheduled at the stages that matter.`;
  return `${what[0].toUpperCase()}${what.slice(1)} in ${name}${l.nearby.length ? ` and nearby ${listNames(l.nearby.slice(0, 3))}` : ""} can be arranged from our Boduppal office.`;
};

export const serviceAreas: ServiceArea[] = [
  {
    key: "civil-engineers",
    serviceSlug: "structural-engineering",
    label: "Civil Engineers",
    card: (name) => `Structural design, RCC drawings, additional-floor checks and site supervision in ${name}.`,
    heroLine: ({ name }) => `Safe, economical structural design and site supervision for homes and buildings in ${name}, since 1995.`,
    lead: (c) =>
      `BBMC's civil and structural engineers work on independent houses, rental buildings and commercial projects in ${c.where}. We design the foundations, columns, beams and slabs, prepare clear drawings for your site team and check the work before concreting, so the building is safe without wasting steel and concrete. ${reach(c, "a site inspection")}`,
    meta: (w) => `Civil & structural engineers in ${w}. RCC design, structural drawings, extra-floor checks & site supervision by BBMC since 1995.`,
    offerTitle: "What our civil engineers do",
    offer: [
      "Structural analysis and RCC design",
      "Foundation, column, beam and slab drawings",
      "Reinforcement (bar bending) details",
      "Checks before adding floors to an existing building",
      "Structural stability assessment",
      "Site supervision at footing, column and slab stages",
      "Bank loan estimates and valuations",
    ],
    faqs: ({ name, l }) => [
      { q: `Do you provide civil engineers for house construction in ${name}?`, a: `Yes. Our engineers prepare the structural design and drawings for houses, rental buildings and commercial projects in ${name}, and can supervise construction at key stages.` },
      { q: `Can you check whether my building in ${name} can take another floor?`, a: "Yes. We study the existing structure and tell you whether an additional floor is possible and what strengthening, if any, it needs." },
      {
        q: `Will an engineer visit my site in ${name} during construction?`,
        a: l.region === "Telangana"
          ? `Yes. For ${name} we schedule visits at the critical stages (footing, columns and slabs) and stay in touch with your site team over WhatsApp in between.`
          : `Yes. We inspect footing, column and slab reinforcement before concreting, the stages where mistakes are hardest to fix later.`,
      },
    ],
  },
  {
    key: "vastu-consultants",
    serviceSlug: "vastu-consultation",
    label: "Vastu Consultants",
    card: (name) => `Plot Vastu before purchase, Vastu-compliant plans and corrections without demolition in ${name}.`,
    heroLine: ({ name }) => `Vaasthu advice for plots, homes, flats, shops and offices in ${name}, from a team with 30+ years of experience.`,
    lead: (c) =>
      `Looking for a vastu consultant in ${c.where}? Er. Paspunoori Srinivas Gupta and the BBMC team have guided families and businesses on Vaasthu for over 30 years: plots before purchase, house plans before construction, and practical corrections for existing homes, flats, shops and offices, often without demolition. ${reach(c, "a Vastu site visit")}`,
    meta: (w) => `Vastu consultant in ${w}. Plot Vastu, Vastu house plans, flats, shops & offices, and corrections without demolition. BBMC since 1995.`,
    offerTitle: "How we help with Vastu",
    offer: [
      "Plot selection and plot Vastu analysis",
      "Vastu-compliant house plans (east, west, north and south facing)",
      "Vastu for apartments and flats",
      "Vastu for offices, shops and factories",
      "Vastu correction for existing buildings",
      "Site visit with written recommendations",
    ],
    faqs: ({ name }) => [
      { q: `Can you check a plot's Vastu in ${name} before I buy it?`, a: "Yes. Checking the plot's facing, shape, slopes and surroundings before purchase is one of the most useful times to consult us." },
      { q: `Can you correct Vastu in my existing house in ${name} without demolition?`, a: "In many cases, yes. We first suggest changes to room usage, placement and layout, and recommend structural changes only where they are really needed." },
      { q: `Do you give Vastu consultation for flats in ${name}?`, a: "Yes. We advise on apartments and flats, including the entrance, kitchen, bedrooms and puja room." },
      { q: "Can I take only a Vastu consultation?", a: "Yes. Many clients come to us only for Vaasthu; others take it along with design and construction." },
    ],
  },
  {
    key: "interior-designers",
    serviceSlug: "interior-design",
    label: "Interior Designers",
    card: (name) => `Home, villa, office and cafe interiors in ${name}: layouts, modular kitchens and 3D views.`,
    heroLine: ({ name }) => `Interiors for flats, houses, villas, offices and cafes in ${name}, planned with Vaasthu in mind.`,
    lead: (c) =>
      `BBMC designs interiors for flats, independent houses, villas, offices, cafes and restaurants in ${c.where}. We plan the layout, materials, lighting and storage together, show you 3D views before any work starts, and supervise execution through to handover. Because the same team handles architecture and Vaasthu, the interiors fit your building instead of fighting it. ${reach(c, "a site visit and measurement")}`,
    meta: (w) => `Interior designers in ${w}. Flats, villas, offices & cafes: modular kitchens, false ceilings, 3D views & execution by BBMC since 1995.`,
    offerTitle: "What our interior designers do",
    offer: [
      "Space planning and furniture layouts",
      "Living, dining, bedroom and kids' room design",
      "Modular kitchen and wardrobe design",
      "False ceiling and lighting design",
      "Restaurant, cafe and office interiors",
      "Material and finish selection",
      "3D views before execution",
    ],
    faqs: ({ name }) => [
      { q: `Do you design interiors for flats and apartments in ${name}?`, a: `Yes. We design interiors for apartments, independent houses and villas of all sizes in ${name}.` },
      { q: `Do you do office, shop and cafe interiors in ${name}?`, a: "Yes. Our portfolio includes cafes, restaurants, offices and other commercial spaces." },
      { q: "Will I see the design before work starts?", a: "Yes. We share layouts and 3D views and finalise materials with you before execution begins." },
      { q: "Can the interiors follow Vaasthu?", a: "Yes. We consider Vaasthu for furniture placement, kitchen layout, bed direction and colours." },
    ],
  },
];

export const areaKey = (l: Location) => l.slug.replace(/^architects-in-/, "");
export const serviceAreaHref = (key: ServiceAreaKey, l: Location) => `/${key}-in-${areaKey(l)}`;
export const getServiceArea = (key: string) => serviceAreas.find((s) => s.key === key);
/** The area pages for one service (e.g. "structural-engineering"), if it has them. */
export const serviceAreaForService = (serviceSlug: string) => serviceAreas.find((s) => s.serviceSlug === serviceSlug);

export type ServiceLocationPage = {
  slug: string;
  sa: ServiceArea;
  l: Location;
  name: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  faqs: Faq[];
  image: string;
};

const build = (sa: ServiceArea, l: Location): ServiceLocationPage => {
  const name = l.area.split(" (")[0];
  const where = l.areas ? name : l.region === "Telangana" ? `${name}, Telangana` : `${name}, Hyderabad`;
  const c = { name, l, where };
  const suffix = l.areas ? "" : l.region === "Telangana" ? ", Telangana" : ", Hyderabad";
  return {
    slug: `${sa.key}-in-${areaKey(l)}`,
    sa,
    l,
    name,
    seoTitle: [`${sa.label} in ${name}${suffix} | BBMC`, `${sa.label} in ${name} | BBMC`].find((t) => t.length <= 62) ?? `${sa.label} in ${name}`,
    metaDescription: sa.meta(where),
    intro: [sa.lead(c), l.intro[0]],
    faqs: sa.faqs(c),
    image: getService(sa.serviceSlug)!.image,
  };
};

export const serviceLocationPages: ServiceLocationPage[] = serviceAreas.flatMap((sa) => locations.map((l) => build(sa, l)));
export const getServiceLocationPage = (slug: string) => serviceLocationPages.find((p) => p.slug === slug);
