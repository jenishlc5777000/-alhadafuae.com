export const site = {
  name: "Al Hadaf Concrete Restoration",
  url: "https://www.hadafinteriors.com",
  phone: "+971 58 222 7430",
  phoneHref: "tel:+971582227430",
  whatsapp: "971582227430",
  email: "shine@hadafinteriors.com",
  address: ["Office No. 12, 30th Floor", "Al Moosa Tower, opposite", "Emirates Tower, Dubai, UAE"],
};

export const waLink = (text?: string) => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const img = (id: string, w = 1600) => (id.startsWith("/") ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`);

export const images = {
  pour: "1685464196387-854858ce0f4f",
  team: "1626885930974-4b69aa21bbf9",
  repair: "1673865641469-34498379d8af",
  plaster: "1768839725085-829e6ac7ac26",
  spray: "1632556891885-3864b59d8f74",
  breaker: "1665631153909-ae7a1b6c137f",
  cutter: "1685464196386-d27db832ba25",
  drill: "1625562888409-14b30c2b17b5",
  inspect: "1742112125567-3e8967bad60f",
  survey: "1628158088791-89567a8e84ec",
  rebar: "1635249578213-68b0aa67fdf7",
  mesh: "1582540730843-f4418d96ccbe",
  worker: "1622612023350-b15f063eabe6",
  portrait: "1672748341520-6a839e6c05bb",
  maintenance: "1659353588150-a9dff1059c54",
  carpark: "1570003002183-382712de0b47",
  corridor: "1607694434367-12adf196f305",
  warehouse: "1553413077-190dd305871c",
  hotel: "1541976590-713941681591",
  facade: "1487958449943-2429e8be8625",
  dubai: "1512453979798-5ea266f8880c",
};

export const services = [
  { n: "01", title: "Concrete Assessment", text: "Site-led review of cracks, corrosion, dampness and concrete condition to guide the right intervention.", image: "/projects/warehouse-3.webp" },
  { n: "02", title: "Concrete Repair", text: "Patch repairs, corrosion treatment, crack injection and resurfacing to restore profile and performance.", image: "/projects/slab-3.webp" },
  { n: "03", title: "Concrete Strengthening", text: "Concrete enlargement and steel jacketing to increase member capacity and strengthen existing structures.", image: "/projects/columns-1.webp" },
  { n: "04", title: "Epoxy Systems", text: "Seamless epoxy floors, screeds, anti-slip and chemical-resistant coatings for a resilient finish.", image: "/projects/ceiling-1.webp" },
  { n: "05", title: "Coring & GPR Scanning", text: "Controlled core drilling and GPR scanning to understand what is inside before work begins.", image: "/projects/coring-1.webp" },
  { n: "06", title: "Waterproofing", text: "Membrane, liquid-applied PU and cementitious systems for wet areas, tanks, basements and exposed surfaces.", image: "/projects/slab-4.webp" },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  location?: string;
  year?: string;
  excerpt: string;
  challenge: string;
  approach: string[];
  outcome?: string;
  results?: [string, string][];
  image: string;
  gallery: string[];
};

/** Real site photos live in /public/projects. Add location, year, outcome and results as each project is confirmed. */
export const projects: Project[] = [
  {
    slug: "marine-quay-wall-restoration",
    title: "Marine quay wall restoration",
    category: "Concrete repair",
    sector: "Marine & waterfront",
    excerpt: "Survey and repair of a concrete quay wall and fender piles exposed to tidal water, salt and marine growth.",
    challenge: "Constant wetting, salt and marine growth had left the quay wall and its fender piles weathered, with coating loss and surface damage along the splash zone and the quay edge.",
    approach: [
      "Close inspection of the wall, piles and quay edge to map cracking, spalling and coating failure.",
      "Removal of marine growth and loose or failed material back to sound concrete.",
      "Concrete repairs and protective treatment suited to a wet, salt-laden marine environment.",
      "Works coordinated with the yard's ongoing marine and lifting operations.",
    ],
    image: "/projects/quay-1.webp",
    gallery: ["/projects/quay-2.webp", "/projects/quay-3.webp", "/projects/quay-4.webp", "/projects/quay-5.webp", "/projects/quay-6.webp"],
  },
  {
    slug: "slab-patch-repair-waterproofing",
    title: "Slab patch repair & waterproofing",
    category: "Waterproofing",
    sector: "Residential & commercial",
    excerpt: "Corroded reinforcement exposed, treated and protected, then sealed with a waterproof coating.",
    challenge: "Damaged slab areas had exposed, corroding reinforcement and cracked, delaminating concrete, letting water reach the steel and risking further deterioration.",
    approach: [
      "Breakout of damaged concrete to expose the reinforcement and reach sound material.",
      "Cleaning and treatment of the steel, with protective coating applied to the bars.",
      "Repair of the patch with compatible material, then waterproof coating over the repaired area.",
      "Joints, edges and surrounding concrete checked and sealed so water cannot return.",
    ],
    image: "/projects/slab-1.webp",
    gallery: ["/projects/slab-2.webp", "/projects/slab-3.webp", "/projects/slab-4.webp", "/projects/slab-5.webp", "/projects/slab-6.webp"],
  },
  {
    slug: "coring-and-gpr-scanning",
    title: "Coring & GPR scanning on site",
    category: "Coring & GPR scanning",
    sector: "Commercial & industrial",
    excerpt: "Clean, accurate core drilling at height, with scan marks on the slab to avoid reinforcement and services.",
    challenge: "New openings were needed through slabs and walls in finished buildings, where hitting reinforcement or embedded services would mean damage, delay and cost.",
    approach: [
      "GPR scanning and marking of the slab before any drilling, to locate reinforcement and embedded services.",
      "Core drilling with rig-mounted equipment and water control, working from scaffold towers and ladders.",
      "Positions set out and checked against the marked locations before each core.",
      "Debris and slurry managed so surrounding finishes and services stay clean.",
    ],
    image: "/projects/coring-1.webp",
    gallery: ["/projects/coring-2.webp", "/projects/coring-3.webp", "/projects/coring-4.webp", "/projects/coring-5.webp"],
  },
  {
    slug: "column-and-foundation-strengthening",
    title: "Column & foundation strengthening",
    category: "Concrete strengthening",
    sector: "Building refurbishment",
    excerpt: "Existing columns exposed and prepared, with excavation around the footings for strengthening works.",
    challenge: "A refurbished building needed its existing columns and foundations to carry more, which meant exposing the structure and working carefully around it.",
    approach: [
      "Existing finishes removed to expose the columns and surfaces prepared for new concrete and steel.",
      "Excavation around column bases and footings, with temporary support and marked-up safety taping.",
      "Concrete enlargement and jacketing carried out to the engineer's design.",
      "Works sequenced column by column so the rest of the structure stayed stable.",
    ],
    image: "/projects/columns-1.webp",
    gallery: ["/projects/columns-2.webp", "/projects/columns-3.webp"],
  },
  {
    slug: "warehouse-high-wall-works",
    title: "High-wall works in a logistics warehouse",
    category: "Assessment",
    sector: "Logistics & warehousing",
    excerpt: "Inspection and works at height on a large warehouse wall, using scaffold towers and a scissor lift.",
    challenge: "The warehouse walls rise well beyond normal reach, and the floor below had to stay organised and safe while work went on above.",
    approach: [
      "Access planned with mobile scaffold towers and a scissor lift, matched to each area of wall.",
      "Work zones barricaded and taped off at floor level to keep the area safe.",
      "Wall condition inspected and the required work carried out from the platforms.",
      "Equipment, materials and waste kept tidy so the warehouse floor stayed usable.",
    ],
    image: "/projects/warehouse-1.webp",
    gallery: ["/projects/warehouse-2.webp", "/projects/warehouse-3.webp"],
  },
  {
    slug: "interior-ceiling-works",
    title: "Interior ceiling works",
    category: "Interiors",
    sector: "Commercial interiors",
    excerpt: "Metal-frame ceiling and moisture-resistant board installed ahead of final finishes.",
    challenge: "New rooms needed clean, level ceilings that could be closed up neatly around services, vents and detectors.",
    approach: [
      "Metal framing set out and levelled to the ceiling layout.",
      "Moisture-resistant plasterboard fixed in sequence across the framing.",
      "Openings left for the air vent, smoke detector and other services.",
      "Surfaces left ready for jointing, painting and final finishes.",
    ],
    image: "/projects/ceiling-1.webp",
    gallery: ["/projects/ceiling-2.webp"],
  },
  {
    slug: "paving-repair-and-installation",
    title: "Paving repair & installation",
    category: "Paving & hardscape",
    sector: "Residential & industrial",
    excerpt: "Settled interlock paving reset along a building edge, plus new paving laid across an industrial yard.",
    challenge: "Paving along a building edge had sunk and broken up, and a large yard needed a proper hard surface laid over sand.",
    approach: [
      "Failed and settled blocks lifted, with the base and bedding corrected underneath.",
      "Blocks relaid to line and level, with edge restraints and joints finished.",
      "New paving laid in the yard on a prepared base, working through sand and dust.",
      "Surfaces compacted and finished so they can take traffic.",
    ],
    image: "/projects/paving-1.webp",
    gallery: ["/projects/paving-2.webp", "/projects/paving-3.webp", "/projects/paving-4.webp", "/projects/paving-5.webp"],
  },
  {
    slug: "roof-and-parapet-assessment",
    title: "Roof & parapet assessment",
    category: "Assessment",
    sector: "Commercial building",
    excerpt: "Condition review of a roof slab and parapet wall with peeling finishes and weathered surfaces.",
    challenge: "The parapet finish was peeling away and the roof was cluttered with old equipment and debris, hiding the true condition of the slab and its waterproofing.",
    approach: [
      "Full walk-over of the roof to record cracking, ponding, peeling and defects at the parapet.",
      "Debris and redundant equipment identified for removal so the slab can be properly inspected.",
      "Parapet surface condition checked for water ingress and failed coating.",
      "Repair and waterproofing options recommended from the findings.",
    ],
    image: "/projects/roof-1.webp",
    gallery: [],
  },
];

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  lead: string;
  sections: { id: string; heading: string; paras: string[]; list?: string[]; quote?: string }[];
  takeaways: string[];
};

export const posts: Post[] = [
  {
    slug: "cosmetic-crack-or-structural",
    title: "The difference between a cosmetic crack and a structural conversation",
    category: "Concrete repair",
    date: "2026-09-12",
    readTime: "6 min read",
    excerpt: "A close look at signs that deserve a proper site assessment.",
    image: "/projects/slab-3.webp",
    lead: "Almost every concrete building cracks. The useful question is not whether a crack exists, but what it is telling you about the structure behind it.",
    sections: [
      { id: "why-concrete-cracks", heading: "Why concrete cracks at all", paras: ["Concrete shrinks as it dries and moves with temperature. In Dubai, where surfaces can swing by more than 30°C between night and midday, that movement is constant. Fine, shallow cracks are often the material relieving stress, and many never grow.", "Problems start when cracks are caused by load, settlement or corroding reinforcement. Those cracks keep moving, and they usually get worse."] },
      { id: "usually-cosmetic", heading: "Signs it is usually cosmetic", paras: ["These are worth recording, but rarely urgent:"], list: ["Hairline cracks under about 0.3 mm wide", "Random, map-like patterns on plaster or render", "Cracks that have not changed in width over several months", "No staining, dampness or loose material nearby"] },
      { id: "worth-assessing", heading: "Signs that deserve an assessment", paras: ["These suggest something is happening in the structure itself:"], list: ["Cracks that are widening, or that reopen after being filled", "Diagonal or stepped cracks near openings and supports", "Rust-coloured staining, which points to corroding steel", "Spalling, hollow-sounding areas or exposed reinforcement", "Doors and windows that start to stick"], quote: "A crack is a symptom. Repairing the symptom without understanding the cause usually means repairing it twice." },
      { id: "what-we-do", heading: "What an assessment involves", paras: ["We start by looking and listening: visual inspection, hammer tapping and crack mapping. Where needed, we add cover-meter readings, carbonation and chloride testing, or scanning to see the reinforcement.", "The result is a short, plain-language report: what is happening, how serious it is, and the sensible options, from monitoring through to repair or strengthening."] },
    ],
    takeaways: ["Most hairline cracks are not structural, but they are worth recording.", "Width, movement, pattern and staining tell you more than the crack's length.", "Rust staining or spalling should always be assessed."],
  },
  {
    slug: "scan-first",
    title: "Scan first: the quiet discipline behind a cleaner project",
    category: "Site intelligence",
    date: "2026-08-21",
    readTime: "5 min read",
    excerpt: "Why the best intervention begins with an invisible investigation.",
    image: "/projects/coring-3.webp",
    lead: "Before a single core is drilled, the most valuable work on a project is often invisible: finding out exactly what is inside the concrete.",
    sections: [
      { id: "the-risk", heading: "The risk you cannot see", paras: ["Slabs and walls hide reinforcement, post-tensioned tendons, conduits and pipes. Cutting through the wrong one can mean structural damage, live electrical hazards or a flooded floor, followed by delays and difficult conversations."] },
      { id: "how-gpr-works", heading: "How ground-penetrating radar helps", paras: ["GPR sends pulses of radio energy into the concrete and reads the reflections. Steel, voids and services each produce a distinct signature, which a trained operator turns into marked positions and depths on the surface.", "It is fast, non-destructive and works without access to the other side of the slab."], quote: "Ten minutes of scanning is cheaper than ten days of investigating a tendon strike." },
      { id: "good-scan", heading: "What a good scan delivers", paras: ["Scanning is only useful if the information reaches the people making decisions. Every scan should leave behind:"], list: ["Clear markings on the slab, with an agreed colour code", "A drawing or photo record of every location", "Flagged clashes, with suggested alternative positions", "A sign-off before cutting begins"] },
    ],
    takeaways: ["Scan before every penetration in an existing structure.", "Post-tensioned slabs need special care. Never cut them blind.", "Share scan results with the design team early, while moving a core is still easy."],
  },
  {
    slug: "dubai-maintenance-checklist",
    title: "The Dubai maintenance checklist that actually helps",
    category: "Maintenance",
    date: "2026-07-30",
    readTime: "7 min read",
    excerpt: "A practical rhythm for protecting exposed concrete throughout the year.",
    image: "/projects/paving-2.webp",
    lead: "Heat, humidity, salt air and sand put concrete in the Gulf under constant pressure. A simple routine catches most problems while they are still cheap to fix.",
    sections: [
      { id: "monthly", heading: "Every month", paras: ["A short walk-round by the facilities team is enough:"], list: ["Look for new cracks, staining or loose material", "Check drains, gullies and roof outlets are clear of sand", "Note any damp patches on soffits or walls"] },
      { id: "quarterly", heading: "Every quarter", paras: ["Go a little deeper on the areas that work hardest:"], list: ["Inspect balcony edges, parapets and exposed beams", "Check movement joints and sealants for splitting or debonding", "Review car park decks for wear, ponding and leaks"] },
      { id: "annually", heading: "Every year", paras: ["Bring in a specialist for a condition survey of the whole building. Before the summer peak is the ideal time, so repairs and coatings can go on in cooler months."], quote: "Maintenance is the cheapest structural strengthening there is." },
      { id: "record", heading: "Keep a record", paras: ["Photos with dates, a simple log of what was found and what was done. Over a few years this record becomes the most useful document a building owner has."] },
    ],
    takeaways: ["Short, frequent checks catch most problems early.", "Sand-blocked drains cause a surprising amount of concrete damage.", "Plan coatings and repairs for the cooler months."],
  },
  {
    slug: "carbonation-chlorides-gulf",
    title: "Carbonation, chlorides and the Gulf climate: why rebar corrodes",
    category: "Concrete repair",
    date: "2026-06-18",
    readTime: "6 min read",
    excerpt: "The chemistry behind spalling, and what it means for how repairs should be designed.",
    image: "/projects/quay-3.webp",
    lead: "Healthy concrete protects the steel inside it. Most of the spalling we repair starts when that protection is lost.",
    sections: [
      { id: "passive-layer", heading: "The passive layer", paras: ["Fresh concrete is highly alkaline, which forms a thin protective film on the reinforcement. While that film survives, the steel barely corrodes, even in a harsh climate."] },
      { id: "two-threats", heading: "Two ways the protection is lost", paras: ["Carbonation: carbon dioxide from the air slowly lowers the alkalinity of the concrete, working inward from the surface.", "Chlorides: salts from sea air, groundwater or old contaminated materials reach the steel and break down the film locally, even in alkaline concrete."], quote: "Once steel starts to rust it expands, and the concrete in front of it has nowhere to go but off." },
      { id: "repair-design", heading: "What that means for repairs", paras: ["A good repair deals with the cause, not just the broken concrete:"], list: ["Remove concrete behind the bar, not just in front of it", "Clean and treat the steel, and replace it where section loss is significant", "Use compatible repair mortars, applied and cured properly", "Protect the surrounding area with inhibitors or coatings so corrosion does not just move next door"] },
    ],
    takeaways: ["Spalling is usually a symptom of corroding reinforcement.", "Testing for carbonation depth and chloride levels guides the repair design.", "Patch repairs without protection often fail around their edges."],
  },
  {
    slug: "strengthening-explained",
    title: "Concrete enlargement and steel jacketing, explained",
    category: "Strengthening",
    date: "2026-05-09",
    readTime: "5 min read",
    excerpt: "How we add capacity to beams, slabs and columns, and when strengthening is the right choice.",
    image: "/projects/columns-2.webp",
    lead: "Many buildings are asked to do more than they were designed for. Strengthening lets an existing structure carry the extra load, without starting again.",
    sections: [
      { id: "what-it-is", heading: "Two common methods", paras: ["Concrete enlargement adds new reinforced concrete around an existing member, making it larger and stronger. Steel jacketing wraps a member, often a column, in steel plates or angles that confine the concrete and carry extra load. Both work together with the original structure."] },
      { id: "when-to-use", heading: "When strengthening makes sense", paras: ["It is worth considering when:"], list: ["Loads are increasing because of a change of use or new equipment", "Openings have been cut and capacity needs to be restored", "Assessment shows members are weaker than the design requires", "Demolition and rebuilding would cost far more, or take far longer"] },
      { id: "what-matters", heading: "What makes it work", paras: ["The new material is only as good as its connection to the old. Surface preparation, correct anchoring and tight grouting make the difference, and the design must be confirmed by a structural engineer before any work begins."], quote: "Strengthening is a design problem first, and a construction problem second." },
    ],
    takeaways: ["Enlargement and jacketing add capacity to existing members.", "A structural engineer should always confirm the design.", "Surface preparation and bond quality are not optional."],
  },
  {
    slug: "cutting-occupied-buildings",
    title: "Cutting into an occupied building, quietly",
    category: "Site intelligence",
    date: "2026-04-15",
    readTime: "4 min read",
    excerpt: "How to keep noise, dust and risk down when the building has to stay open.",
    image: "/projects/coring-5.webp",
    lead: "Hotels, offices and residential towers rarely close for works. Coring and cutting have to fit around the people inside.",
    sections: [
      { id: "plan-hours", heading: "Plan around people", paras: ["Agree work windows with operations from the start. The loudest tasks go into the quietest hours, and everyone affected knows what is happening and when."] },
      { id: "right-tools", heading: "Choose the right tools", paras: ["Diamond coring and wire sawing cut cleanly with far less vibration and noise than breakers. Water suppression and slurry capture keep dust out of the air and off the floors below."], list: ["Diamond core drills for penetrations", "Wire and wall saws for openings", "Negative-pressure enclosures for dust control", "Temporary propping, designed before cutting"] },
      { id: "communicate", heading: "Communicate constantly", paras: ["A daily plan shared with building management, clear signage, and a named contact on site prevent most complaints before they start."], quote: "The best compliment for work in a live building is that nobody noticed it." },
    ],
    takeaways: ["Scan before cutting, every time.", "Low-vibration methods protect the structure and the occupants.", "Good communication matters as much as good equipment."],
  },
];

export const formatDate = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
