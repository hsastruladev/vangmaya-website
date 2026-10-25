import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link aria-label="Vangmaya home" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            వ
          </span>
          <span className="brand-name">వాంగ్మయం</span>
          <span className="brand-dot">.</span>
        </Link>
        <nav aria-label="ప్రధాన నావిగేషన్" className="main-nav">
          <Link href="/kavyamulu">కావ్యాలు</Link>
          <Link href="/#collection">సంకలనం</Link>
          <Link href="/#about">మా గురించి</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="header-cta" href="/kavyamulu">
            చదవడం మొదలుపెట్టు <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
