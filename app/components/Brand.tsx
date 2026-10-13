import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Al Hadaf Concrete Restoration, home">
      <img className="brand-logo" src="/al-hadaf-logo-light.png" alt="Al Hadaf Concrete Restoration" width={154} height={40} />
    </Link>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}
