import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "wh_cookie_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (level: "essential" | "all") => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ level, ts: new Date().toISOString() }),
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-[60] bg-navy-dark border border-gold/30 shadow-2xl"
    >
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-gold text-xs tracking-[0.25em] uppercase">Cookie Notice</span>
          <button
            onClick={() => accept("essential")}
            aria-label="Decline non-essential cookies"
            className="text-cream/40 hover:text-gold transition-colors -mt-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-cream/70 text-sm leading-relaxed mb-5">
          This site uses essential cookies to operate and optional analytics cookies to understand how the platform is used. See our{" "}
          <Link to="/cookies" className="text-gold underline hover:text-gold-light">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => accept("all")}
            className="flex-1 px-5 py-2.5 border border-gold bg-gold text-navy text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={() => accept("essential")}
            className="flex-1 px-5 py-2.5 border border-cream/30 text-cream/80 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
