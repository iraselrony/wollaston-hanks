import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import luxuryRes from "@/assets/luxury-residential.jpg";

const SalesPage = () => {
  return (
    <Layout>
      <SEO
        title="Investment & Development Sales"
        description="Strategic acquisition and disposal of institutional-scale development and repositioning opportunities. Off-market, discreet, structured for value creation."
        path="/platform/sales"
      />
      <PageHero
        title="Investment & Development Sales"
        subtitle="Strategic acquisition and disposal of institutional-scale development opportunities"
        backgroundImage={luxuryRes}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Transaction & Cashflow Engine</span>
          <h2 className="font-heading text-3xl text-navy mb-6">Strategic Transaction Advisory</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The Investment & Development Sales division operates as the strategic transaction engine of the platform. This is not volume brokerage. Every transaction is approached as a development, repositioning or partnership opportunity — ensuring maximum value creation beyond a simple sale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We selectively act on a limited number of mandates per year, focused on institutional-scale development sites, strategic land, hospitality assets and high-end residential — including a substantial volume of off-market opportunities never brought to open market.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Commercial</span>
              <h2 className="font-heading text-2xl text-navy mb-6">Development & Investment</h2>
              <div className="gold-divider-left mb-6" />
              <ul className="space-y-3">
                {["Strategic Land", "Consented Development Sites", "Mixed-Use Assets", "Hospitality & Leisure", "Commercial Investments", "Industrial & Logistics", "Office Buildings", "Stalled / Distressed Schemes"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Discreet</span>
              <h2 className="font-heading text-2xl text-navy mb-6">High-End Residential Advisory</h2>
              <div className="gold-divider-left mb-6" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Private, relationship-driven advisory for UHNW individuals, institutions and family offices. Not listings, not estate agency — discreet access to off-market opportunities.
              </p>
              <ul className="space-y-3">
                {["Off-Market Prime Residential", "Private Buyer Representation", "International Property Advisory", "Estate & Country House Advisory", "Branded Residence & Luxury Development Sales"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Acquisition Advisory</span>
            <h2 className="font-heading text-3xl text-cream mb-4">Strategic Sourcing</h2>
            <div className="gold-divider mb-4" />
            <p className="text-cream/60 max-w-2xl mx-auto">
              For investors, institutions and developers seeking institutional-scale opportunities — across both consented and pre-consent positions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Off-Market Sourcing", desc: "Discreet origination through planning portals, banks, agents and direct landowner relationships." },
              { title: "Strategic Site Sourcing", desc: "Targeted identification of land with planning potential or strategic positioning." },
              { title: "Acquisition Advisory", desc: "End-to-end transaction advisory for institutions and private capital." },
              { title: "Repositioning-Led Acquisitions", desc: "Sourcing assets with embedded value through repositioning, planning uplift or change of use." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-6">
                <h3 className="font-heading text-base text-cream mb-3">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-4">Acquire or Dispose of an Asset?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
            Engagements are structured around opportunity scale and strategic fit. Confidential introductions welcomed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit an Asset
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Discuss a Transaction <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesPage;
