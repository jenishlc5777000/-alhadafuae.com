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

export const img = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

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
  { n: "01", title: "Concrete repair", text: "Repair systems for spalling, cracks and weathered surfaces, matched to the building." },
  { n: "02", title: "Structural strengthening", text: "Careful strengthening for buildings that need a new level of performance." },
  { n: "03", title: "Concrete scanning", text: "We locate reinforcement and embedded services before the first cut." },
  { n: "04", title: "Core cutting & demolition", text: "Controlled work in live environments, from access planning to clearance." },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  location: string;
  year: string;
  duration: string;
  excerpt: string;
  challenge: string;
  approach: string[];
  outcome: string;
  results: [string, string][];
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "podium-slab-restoration",
    title: "Podium slab restoration",
    category: "Concrete repair",
    sector: "Residential tower",
    location: "Dubai Marina",
    year: "2025",
    duration: "14 weeks",
    excerpt: "Spalled soffits and corroded reinforcement across a podium deck, repaired while residents stayed in place.",
    challenge: "Years of chloride exposure had left the podium soffit with widespread delamination and exposed, corroding reinforcement. The building was fully occupied, the car park below had to stay open, and the client needed a repair that would last rather than another patch.",
    approach: [
      "Hammer-tap and half-cell survey to map delamination and active corrosion zones.",
      "Phased breakout in controlled bays, keeping two thirds of the car park in use at all times.",
      "Rebar cleaned to bright steel, treated, and supplemented where section loss exceeded limits.",
      "Polymer-modified repair mortar applied in layers, followed by a migrating corrosion inhibitor and anti-carbonation coating.",
    ],
    outcome: "The podium was handed back on programme with a documented repair map, so the owners now know exactly what was done and where to look at the next inspection.",
    results: [["1,850", "m² of soffit surveyed"], ["0", "days of full car park closure"], ["14", "weeks, survey to handover"]],
    image: images.spray,
    gallery: [images.plaster, images.repair, images.mesh],
  },
  {
    slug: "warehouse-column-strengthening",
    title: "Column strengthening with CFRP",
    category: "Structural strengthening",
    sector: "Logistics warehouse",
    location: "Jebel Ali",
    year: "2024",
    duration: "6 weeks",
    excerpt: "A change of use meant heavier racking loads. Carbon fibre wrapping gave the columns the capacity they needed.",
    challenge: "New high-bay racking increased the axial loads on a row of internal columns beyond their original design capacity. Steel jacketing would have eaten into aisle widths and needed hot works inside a live warehouse.",
    approach: [
      "Structural review with the client's engineer to confirm the required capacity uplift.",
      "Concrete scanning to confirm cover and bar layout before surface preparation.",
      "Corners rounded, surfaces ground and primed to the system manufacturer's specification.",
      "CFRP sheets wrapped and saturated in epoxy, with pull-off tests on witness panels.",
    ],
    outcome: "The columns gained the required capacity with almost no change to their footprint, and racking installation started the week after handover.",
    results: [["24", "columns strengthened"], ["<10 mm", "added to each face"], ["100%", "pull-off tests passed"]],
    image: images.warehouse,
    gallery: [images.rebar, images.inspect, images.worker],
  },
  {
    slug: "office-retrofit-scanning",
    title: "GPR scanning ahead of an MEP retrofit",
    category: "Concrete scanning",
    sector: "Commercial office",
    location: "Business Bay",
    year: "2025",
    duration: "3 weeks",
    excerpt: "More than 300 new penetrations planned across post-tensioned slabs, with every tendon located first.",
    challenge: "An office fit-out needed hundreds of new openings for services, through slabs containing post-tensioned tendons. A single strike could have meant structural damage, a long investigation and a stalled programme.",
    approach: [
      "Ground-penetrating radar scans over every proposed core location, plus a safety margin.",
      "Tendons, rebar and conduits marked directly on the slab and in a shared drawing set.",
      "Clash locations flagged early so the MEP designers could shift positions on paper, not on site.",
      "Final sign-off sheet for each penetration before the cutting team moved in.",
    ],
    outcome: "Every opening was cored without a single tendon strike, and the design team resolved conflicts before they became site problems.",
    results: [["312", "locations scanned"], ["0", "tendon strikes"], ["27", "clashes resolved on paper"]],
    image: images.survey,
    gallery: [images.drill, images.inspect, images.corridor],
  },
  {
    slug: "live-hotel-core-cutting",
    title: "Core cutting in a live hotel",
    category: "Core cutting & demolition",
    sector: "Hospitality",
    location: "Downtown Dubai",
    year: "2024",
    duration: "5 weeks",
    excerpt: "New openings and controlled demolition carried out floor by floor, without disturbing guests.",
    challenge: "A hotel refurbishment needed new shaft openings and partial slab removal while the rest of the building stayed open to guests. Noise, dust and vibration all had to be tightly controlled.",
    approach: [
      "Work windows agreed with hotel operations, with the loudest tasks in the quietest hours.",
      "Wire-saw and diamond core cutting instead of breakers, to keep vibration low.",
      "Negative-pressure dust enclosures and water slurry capture on every floor.",
      "Temporary propping designed and checked before any section was released.",
    ],
    outcome: "All openings were completed within the agreed hours, with no guest complaints logged against the works.",
    results: [["68", "cores and openings"], ["0", "guest complaints"], ["5", "weeks on programme"]],
    image: images.cutter,
    gallery: [images.breaker, images.drill, images.hotel],
  },
  {
    slug: "facade-balcony-maintenance",
    title: "Facade & balcony maintenance programme",
    category: "Building maintenance",
    sector: "Villa community",
    location: "Dubailand",
    year: "2023",
    duration: "12 months",
    excerpt: "A rolling programme of inspection and repair, so small defects never become big ones.",
    challenge: "Balcony edges and facade elements across a large villa community were showing early cracking and spalling. The owners association wanted a predictable budget, not a series of emergency call-outs.",
    approach: [
      "Condition survey of every unit, graded by urgency and logged with photos.",
      "Quarterly repair cycles grouped by area, to keep disruption to residents low.",
      "Joint sealant renewal and protective coatings on exposed concrete.",
      "A simple annual report showing what was found, fixed and scheduled.",
    ],
    outcome: "Emergency call-outs fell sharply and the association now plans maintenance spend a year ahead with confidence.",
    results: [["420", "units surveyed"], ["4", "planned repair cycles"], ["1", "clear annual budget"]],
    image: images.maintenance,
    gallery: [images.dubai, images.plaster, images.facade],
  },
  {
    slug: "car-park-deck-protection",
    title: "Car park deck repair & waterproofing",
    category: "Concrete repair",
    sector: "Multi-storey car park",
    location: "Al Barsha",
    year: "2023",
    duration: "10 weeks",
    excerpt: "Leaking joints and worn decks repaired and sealed, level by level, with the car park kept in service.",
    challenge: "Water was getting through movement joints and cracked decks, staining soffits and corroding steel below. Closing the car park was not an option for the building's tenants.",
    approach: [
      "Deck survey with cover-meter readings and chloride sampling.",
      "Crack injection and movement joint replacement on each level.",
      "Localised concrete repairs before applying a trafficable waterproof deck coating.",
      "Re-lining and signage reinstated so each level returned to use immediately.",
    ],
    outcome: "The leaks stopped, the decks were protected against further chloride ingress, and tenants kept parking throughout.",
    results: [["6", "levels treated"], ["640", "linear metres of joints"], ["10", "weeks, level by level"]],
    image: images.carpark,
    gallery: [images.spray, images.repair, images.corridor],
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
    image: images.repair,
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
    image: images.drill,
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
    image: images.dubai,
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
    image: images.mesh,
    lead: "Healthy concrete protects the steel inside it. Most of the spalling we repair starts when that protection is lost.",
    sections: [
      { id: "passive-layer", heading: "The passive layer", paras: ["Fresh concrete is highly alkaline, which forms a thin protective film on the reinforcement. While that film survives, the steel barely corrodes, even in a harsh climate."] },
      { id: "two-threats", heading: "Two ways the protection is lost", paras: ["Carbonation: carbon dioxide from the air slowly lowers the alkalinity of the concrete, working inward from the surface.", "Chlorides: salts from sea air, groundwater or old contaminated materials reach the steel and break down the film locally, even in alkaline concrete."], quote: "Once steel starts to rust it expands, and the concrete in front of it has nowhere to go but off." },
      { id: "repair-design", heading: "What that means for repairs", paras: ["A good repair deals with the cause, not just the broken concrete:"], list: ["Remove concrete behind the bar, not just in front of it", "Clean and treat the steel, and replace it where section loss is significant", "Use compatible repair mortars, applied and cured properly", "Protect the surrounding area with inhibitors or coatings so corrosion does not just move next door"] },
    ],
    takeaways: ["Spalling is usually a symptom of corroding reinforcement.", "Testing for carbonation depth and chloride levels guides the repair design.", "Patch repairs without protection often fail around their edges."],
  },
  {
    slug: "cfrp-strengthening-explained",
    title: "CFRP strengthening, explained without the jargon",
    category: "Strengthening",
    date: "2026-05-09",
    readTime: "5 min read",
    excerpt: "How carbon fibre adds capacity to beams, slabs and columns, and when it is the right choice.",
    image: images.rebar,
    lead: "Carbon fibre reinforced polymer, or CFRP, lets us add strength to an existing structure with very little added weight or thickness.",
    sections: [
      { id: "what-it-is", heading: "What it is", paras: ["CFRP is carbon fibre in sheet, strip or fabric form, bonded to concrete with structural epoxy. Once bonded, it works with the existing reinforcement to carry extra tension, or to confine columns."] },
      { id: "when-to-use", heading: "When it makes sense", paras: ["It is a strong option when:"], list: ["Loads are increasing because of a change of use or new equipment", "Openings have been cut and capacity needs to be restored", "Steel jacketing would take too much space or need hot works", "The programme leaves little room for disruption"] },
      { id: "what-matters", heading: "What makes it work", paras: ["The fibres are only as good as their bond. Surface preparation, correct primers and environmental control during application make the difference, especially in summer heat. Pull-off tests on site confirm the bond before handover."], quote: "Carbon fibre is a precise tool. It rewards careful design and careful hands." },
    ],
    takeaways: ["CFRP adds capacity with minimal added size or weight.", "A structural engineer should always confirm the design.", "Surface preparation and bond testing are not optional."],
  },
  {
    slug: "cutting-occupied-buildings",
    title: "Cutting into an occupied building, quietly",
    category: "Site intelligence",
    date: "2026-04-15",
    readTime: "4 min read",
    excerpt: "How to keep noise, dust and risk down when the building has to stay open.",
    image: images.breaker,
    lead: "Hotels, offices and residential towers rarely close for works. Core cutting and demolition have to fit around the people inside.",
    sections: [
      { id: "plan-hours", heading: "Plan around people", paras: ["Agree work windows with operations from the start. The loudest tasks go into the quietest hours, and everyone affected knows what is happening and when."] },
      { id: "right-tools", heading: "Choose the right tools", paras: ["Diamond coring and wire sawing cut cleanly with far less vibration and noise than breakers. Water suppression and slurry capture keep dust out of the air and off the floors below."], list: ["Diamond core drills for penetrations", "Wire and wall saws for openings", "Negative-pressure enclosures for dust control", "Temporary propping, designed before cutting"] },
      { id: "communicate", heading: "Communicate constantly", paras: ["A daily plan shared with building management, clear signage, and a named contact on site prevent most complaints before they start."], quote: "The best compliment for work in a live building is that nobody noticed it." },
    ],
    takeaways: ["Scan before cutting, every time.", "Low-vibration methods protect the structure and the occupants.", "Good communication matters as much as good equipment."],
  },
];

export const formatDate = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
