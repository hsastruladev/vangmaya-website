import Link from "next/link";
import type { Kavya } from "@/data/kavyas";

type KavyaCardProps = {
  kavya: Kavya;
  index: number;
};

export function KavyaCard({ kavya, index }: KavyaCardProps) {
  return (
    <article className={`kavya-card cover-tone-${(index % 4) + 1}`}>
      <Link
        aria-label={`${kavya.titleTe} — ${kavya.titleEn} గురించి`}
        className="kavya-card-link"
        href={`/kavyamulu/${kavya.slug}`}
      >
        <div className="book-cover">
          <span className="cover-overline">వాంగ్మయం · ప్రజా డొమైన్</span>
          <span className="cover-ornament" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="cover-title">{kavya.titleTe}</span>
          <span className="cover-title-en">{kavya.titleEn}</span>
          <span className="cover-author">{kavya.authorTe}</span>
          <span className="cover-year">సుమారు {kavya.year}</span>
        </div>
        <div className="kavya-card-details">
          <div className="kavya-card-title">
            <div>
              <h2>{kavya.titleTe}</h2>
              <p>{kavya.titleEn}</p>
            </div>
            <span aria-hidden="true" className="card-arrow">
              ↗
            </span>
          </div>
          <div className="kavya-card-meta">
            <span>{kavya.authorTe}</span>
            <span className="meta-dot" />
            <span>సుమారు {kavya.year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
