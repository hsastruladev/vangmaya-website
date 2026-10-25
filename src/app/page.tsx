import Link from "next/link";
import { KavyaCard } from "@/components/kavya-card";
import { kavyas } from "@/data/kavyas";

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            తెలుగు సాహిత్యానికి ఒక కొత్త చిరునామా
          </span>
          <h1>
            పద్యపు వెలుగును
            <br />
            <span>మళ్లీ చదువుదాం.</span>
          </h1>
          <p className="hero-description">
            ప్రాచీన తెలుగు సాహిత్యం. సులభంగా చదవండి, నెమ్మదిగా ఆస్వాదించండి.
            ప్రకటనల హడావిడి లేకుండా.
          </p>
          <form action="/kavyamulu" className="search-box">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.2 4.2" />
            </svg>
            <input
              aria-label="పద్యం లేదా కావ్యం వెతకండి"
              name="q"
              placeholder="పద్యము వెతుకు..."
              type="search"
            />
            <button type="submit">వెతుకు</button>
          </form>
          <p className="search-hint">
            ఉదా: మనుచరిత్రము, పెద్దన, పద్యం
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kavyamulu">
              కావ్యాలు చూడండి
              <span aria-hidden="true">↗</span>
            </Link>
            <span className="hero-note">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="m4.5 10.3 3.4 3.3 7.6-7.4" />
                <circle cx="10" cy="10" r="8.2" />
              </svg>
              100% ప్రకటనలు లేవు
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="hero-art">
          <div className="hero-art-glow" />
          <div className="hero-art-circle hero-art-circle-one" />
          <div className="hero-art-circle hero-art-circle-two" />
          <div className="hero-manuscript">
            <span className="manuscript-seal">వా</span>
            <span className="manuscript-rule" />
            <span className="manuscript-glyph">అ</span>
            <span className="manuscript-caption">తెలుగు పద్య సౌరభం</span>
            <span className="manuscript-rule manuscript-rule-short" />
          </div>
          <span className="hero-art-spark hero-art-spark-one">✳</span>
          <span className="hero-art-spark hero-art-spark-two">✦</span>
        </div>
      </section>

      <section aria-label="Vangmaya highlights" className="trust-strip">
        <div className="section-shell trust-strip-inner">
          <span>చదువుకు మాత్రమే</span>
          <span className="trust-divider" />
          <span>ప్రజా డొమైన్ గ్రంథాలు</span>
          <span className="trust-divider" />
          <span>ప్రకటనలు లేవు. అంతరాయాలు లేవు.</span>
        </div>
      </section>

      <section className="section-shell section-block featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ఎంచుకున్న పఠనం</span>
            <h2>ప్రారంభించడానికి ఒక కావ్యం</h2>
          </div>
          <Link className="text-link" href="/kavyamulu">
            అన్ని కావ్యాలు <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="featured-grid">
          {kavyas.slice(0, 3).map((kavya, index) => (
            <KavyaCard index={index} key={kavya.slug} kavya={kavya} />
          ))}
        </div>
      </section>

      <section className="section-shell daily-section">
        <div className="daily-card">
          <div className="daily-card-heading">
            <span className="daily-icon" aria-hidden="true">
              ✳
            </span>
            <div>
              <span className="eyebrow">రోజుకో పద్యం</span>
              <h2>ఈ రోజు పఠనం</h2>
            </div>
          </div>
          <div className="daily-placeholder">
            <span className="daily-placeholder-mark" aria-hidden="true">
              “
            </span>
            <p>
              ప్రజా డొమైన్ మూలపాఠం ధృవీకరించిన తర్వాత, ఈ చోట రోజుకో పద్యం
              కనిపిస్తుంది.
            </p>
            <span className="daily-source">మూలాధార నిర్ధారణలో ఉంది</span>
          </div>
          <Link className="text-link" href="/kavyamulu">
            కావ్యాల నుంచి చదవండి <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="daily-aside">
          <span className="aside-number">01</span>
          <h3>ప్రాచీన పద్యం.</h3>
          <h3 className="aside-muted">ఆధునిక పఠనం.</h3>
          <p>
            తెలుగు సాహిత్యపు గొప్ప రచనలను శుభ్రమైన, ప్రశాంతమైన పఠన అనుభవంలో
            అందిస్తున్నాం.
          </p>
          <Link className="text-link" href="/kavyamulu">
            మా సంకలనం <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section-shell collection-callout" id="collection">
        <div>
          <span className="eyebrow">సాహిత్య సంపద</span>
          <h2>చదవడానికి మరిన్ని ఉన్నాయి.</h2>
          <p>
            కావ్యాలు, పద్యాలు, పదాల అర్థాలు — ప్రతి పుటలో మూలాధారానికి గౌరవం.
          </p>
        </div>
        <Link className="button button-dark" href="/kavyamulu">
          కావ్యాల సంకలనం తెరవండి <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
