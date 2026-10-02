import { Arrow } from "./Brand";
import { site, waLink } from "../lib/content";

export default function LocationSection({ index }: { index: string }) {
  return (
    <section className="location" aria-labelledby="location-title">
      <div className="location-map">
        <iframe title="Al Hadaf office location, Al Moosa Tower Dubai" src="https://www.google.com/maps?q=Al+Moosa+Tower,+Dubai,+United+Arab+Emirates&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className="map-wash" />
        <div className="map-coordinates">25°12&apos;46.9&quot;N&nbsp;&nbsp; 55°16&apos;37.2&quot;E</div>
      </div>
      <div className="location-card" data-reveal>
        <p className="kicker red-text">VISIT OUR OFFICE / {index}</p>
        <h2 id="location-title">Find us in<br /><em>the city.</em></h2>
        <div className="address-block">
          <span>AL HADAF OFFICE</span>
          <p>{site.address.map((l) => <span key={l}>{l}<br /></span>)}</p>
        </div>
        <div className="location-actions">
          <a className="button primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=Al+Moosa+Tower,+Dubai"><span>Get directions</span> <Arrow /></a>
          <a className="text-link" href={waLink()} target="_blank" rel="noreferrer">Message us <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
