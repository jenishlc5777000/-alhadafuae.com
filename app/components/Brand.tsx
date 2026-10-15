import Link from "next/link";

/** Horizontal mark + "Al Hadaf / Concrete Restoration" — used in the header. */
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Al Hadaf Concrete Restoration, home">
      <img className="brand-logo" src="/al-hadaf-logo.png" alt="Al Hadaf Concrete Restoration" width={148} height={40} />
    </Link>
  );
}

/** Stacked mark + "Al Hadaf / Interiors & Concrete Restoration" — used in the footer and anywhere a tall logo fits better. */
export function BrandStacked() {
  return (
    <Link className="brand brand-stacked" href="/" aria-label="Al Hadaf Interiors & Concrete Restoration, home">
      <img src="/al-hadaf-logo-stacked.png" alt="Al Hadaf Interiors & Concrete Restoration" width={120} height={130} />
    </Link>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}
