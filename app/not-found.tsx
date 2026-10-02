import Link from "next/link";
import { Arrow } from "./components/Brand";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="technical-grid" aria-hidden="true" />
      <div className="not-found-inner">
        <p className="kicker light"><i />ERROR 404</p>
        <h1 className="page-title">Off the<br /><em>drawing.</em></h1>
        <p>The page you are looking for has moved or never existed.</p>
        <Link className="button primary" href="/"><span>Back to home</span> <Arrow /></Link>
      </div>
    </section>
  );
}
