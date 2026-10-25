import type { Metadata } from "next";
import Link from "next/link";
import { KavyaCard } from "@/components/kavya-card";
import { kavyas } from "@/data/kavyas";

export const metadata: Metadata = {
  title: "తెలుగు ప్రబంధాలు — Telugu Kavyalu",
  description:
    "ప్రజా డొమైన్ తెలుగు ప్రబంధాల సంకలనం. రచయిత, కాలం, మూలాధార వివరాలతో చదవండి.",
};

type KavyamuluPageProps = {
  searchParams?: {
    q?: string;
  };
};

export default function KavyamuluPage({
  searchParams,
}: KavyamuluPageProps) {
  const query = searchParams?.q?.trim() ?? "";
  const normalizedQuery = query.toLocaleLowerCase("te");
  const filteredKavyas = normalizedQuery
    ? kavyas.filter((kavya) =>
        [kavya.titleTe, kavya.titleEn, kavya.authorTe, kavya.authorEn]
          .join(" ")
          .toLocaleLowerCase("te")
          .includes(normalizedQuery),
      )
    : kavyas;

  return (
    <main className="section-shell catalog-page">
      <div className="catalog-heading">
        <div>
          <span className="eyebrow">తెలుగు సాహిత్య సంకలనం</span>
          <h1>ప్రబంధాలు</h1>
          <p>
            కాలాన్ని దాటి నిలిచిన కావ్యాలు. ప్రతి పుటలో మూలపాఠానికి, దాని
            రచయితలకు గౌరవం.
          </p>
        </div>
        <span className="catalog-count">
          <strong>{filteredKavyas.length.toString().padStart(2, "0")}</strong>
          <span>కావ్యాలు</span>
        </span>
      </div>

      <form action="/kavyamulu" className="catalog-search">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.2 4.2" />
        </svg>
        <input
          aria-label="కావ్యం లేదా రచయిత వెతకండి"
          defaultValue={query}
          name="q"
          placeholder="కావ్యం లేదా రచయిత వెతకండి..."
          type="search"
        />
        <button type="submit">వెతుకు</button>
      </form>

      {filteredKavyas.length > 0 ? (
        <div className="catalog-grid">
          {filteredKavyas.map((kavya, index) => (
            <KavyaCard index={index} key={kavya.slug} kavya={kavya} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">⌕</span>
          <h2>ఈ వెతుకులాటకు కావ్యాలు దొరకలేదు.</h2>
          <p>తెలుగు లేదా ఆంగ్లంలో రచయిత పేరు, కావ్యం పేరు ప్రయత్నించండి.</p>
          <Link className="text-link" href="/kavyamulu">
            అన్ని కావ్యాలు చూడండి <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}

      <p className="catalog-note">
        <span aria-hidden="true">ⓘ</span>
        కాలం వివరాలు సూచనాత్మకం. ప్రతి రచనకు తగిన ప్రజా డొమైన్ మూలపాఠం
        అనుసంధానమైన తర్వాతే పఠనానికి అందుబాటులో ఉంటుంది.
      </p>
    </main>
  );
}
