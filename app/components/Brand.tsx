import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Al Hadaf home">
      <img className="brand-logo" src="/al-hadaf-logo.png" alt="" width={27} height={40} />
      <span>AL HADAF<small>CONCRETE RESTORATION</small></span>
    </Link>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}
