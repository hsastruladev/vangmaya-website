import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kavyas } from "@/data/kavyas";

type KavyaPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return kavyas.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: KavyaPageProps): Metadata {
  const kavya = kavyas.find(({ slug }) => slug === params.slug);

  if (!kavya) {
    return {
      title: "కావ్యం కనబడలేదు",
    };
  }

  return {
    title: `${kavya.titleEn} Padyalu — ${kavya.titleTe}`,
    description: `${kavya.authorTe} రచించిన ${kavya.titleTe} గురించి. ధృవీకరించిన ప్రజా డొమైన్ మూలపాఠం సిద్ధమైనప్పుడు ఇక్కడ చదవవచ్చు.`,
  };
}

export default function KavyaReaderPage({ params }: KavyaPageProps) {
  const currentIndex = kavyas.findIndex(({ slug }) => slug === params.slug);

  if (currentIndex < 0) {
    notFound();
  }

  const kavya = kavyas[currentIndex];
  const previousKavya = kavyas[currentIndex - 1];
  const nextKavya = kavyas[currentIndex + 1];

  return (
    <main className="section-shell reader-page">
      <nav aria-label="Breadcrumb" className="reader-breadcrumb">
        <Link href="/">హోమ్</Link>
        <span aria-hidden="true">/</span>
        <Link href="/kavyamulu">కావ్యాలు</Link>
        <span aria-hidden="true">/</span>
        <span>{kavya.titleTe}</span>
      </nav>

      <header className="reader-heading">
        <span className="eyebrow">ప్రజా డొమైన్ కావ్యం</span>
        <h1>{kavya.titleTe}</h1>
        <p className="reader-title-en">{kavya.titleEn}</p>
        <div className="reader-meta">
          <span>రచన: {kavya.authorTe}</span>
          <span className="meta-dot" />
          <span>సుమారు {kavya.year}</span>
        </div>
      </header>

      <section aria-labelledby="reader-status-title" className="reader-status">
        <span aria-hidden="true" className="reader-status-icon">
          ◷
        </span>
        <div>
          <h2 id="reader-status-title">మూలపాఠం ధృవీకరణలో ఉంది</h2>
          <p>
            ఈ కావ్యానికి సరైన ప్రజా డొమైన్ మూలాన్ని నిర్ధారించిన తర్వాతే పద్యాలు
            ఇక్కడ చేర్చబడతాయి. ధృవీకరణకు ముందు ఊహాజనిత లేదా ఇతరుల హక్కులున్న
            పాఠ్యాన్ని ప్రచురించము.
          </p>
        </div>
      </section>

      <div className="reader-navigation">
        {previousKavya ? (
          <Link
            aria-label={`మునుపటి కావ్యం: ${previousKavya.titleTe}`}
            className="reader-nav-link reader-nav-previous"
            href={`/kavyamulu/${previousKavya.slug}`}
          >
            <span aria-hidden="true">←</span>
            <span>
              <small>మునుపటి కావ్యం</small>
              <strong>{previousKavya.titleTe}</strong>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {nextKavya ? (
          <Link
            aria-label={`తదుపరి కావ్యం: ${nextKavya.titleTe}`}
            className="reader-nav-link reader-nav-next"
            href={`/kavyamulu/${nextKavya.slug}`}
          >
            <span>
              <small>తదుపరి కావ్యం</small>
              <strong>{nextKavya.titleTe}</strong>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
