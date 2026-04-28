import { Link } from "react-router-dom";
import { ArrowRight, Banknote, Building2, Briefcase, Shield, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const CapitalAdvisory = () => {
  return (
    <Layout>
      <SEO
        title="Capital & Asset Advisory"
        description="Institutional-grade advisory for banks, investors, asset managers and family offices on repositioning, development strategy and unlocking complex real estate value."
        path="/platform/capital-advisory"
      />
      <PageHero
        title="Capital & Asset Advisory"
        subtitle="Institutional-grade strategy for banks, investors, asset managers and family offices"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Institutional Advisory Division</span>
          <h2 className="font-heading text-3xl text-navy mb-6">Strategic Capital Intelligence</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks provides strategic advisory to institutions, banks, property funds, family offices and asset owners holding complex or underperforming real estate. The planning-led approach brings unique commercial intelligence to development appraisal, asset repositioning and capital structuring.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Engagements are structured around opportunity scale and complexity. We work selectively with institutions on a limited number of mandates per year — aligned with value creation and long-term outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl text-navy mb-4">Advisory Capabilities</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic advisory across the full development and investment lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Development & Investment Appraisal", desc: "Institutional-grade appraisal of development sites, consented schemes and complex investment opportunities." },
              { title: "Asset Repositioning Strategy", desc: "Strategic repositioning of underperforming hotels, offices, mixed-use and commercial assets to highest and best use." },
              { title: "Distressed Asset Solutions", desc: "Working with banks, receivers and insolvency practitioners on stalled, distressed or repossessed development assets." },
              { title: "Portfolio Advisory", desc: "Strategic review and repositioning of property portfolios — including divestment, hold-and-develop and partnership routes." },
              { title: "Investment Structuring", desc: "Capital structuring across joint ventures, forward funding, development partnerships and equity participation." },
              { title: "Planning Risk Diligence", desc: "Independent planning intelligence and risk assessment to support transaction decisions." },
            ].map((cap) => (
              <div key={cap.title} className="border border-border p-8 hover:border-gold/40 transition-all bg-card">
                <h3 className="font-heading text-lg text-navy mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Who We Advise</span>
            <h2 className="font-heading text-3xl text-cream mb-4">Client Profile</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Banknote, title: "Banks & Lenders", desc: "Distressed and repossessed development assets, loan security and stalled scheme advisory." },
              { icon: Briefcase, title: "Property Funds", desc: "Portfolio repositioning, development overlay strategies and asset optimisation." },
              { icon: Building2, title: "Institutional Investors", desc: "Development appraisal, capital structuring and access to institutional-scale opportunities." },
              { icon: Shield, title: "Family Offices", desc: "Strategic real estate exposure, structured development opportunities and discreet advisory." },
              { icon: Users, title: "Developers", desc: "Planning strategy, feasibility and joint venture structuring for complex schemes." },
              { icon: Briefcase, title: "Insolvency Practitioners", desc: "Strategic repositioning of stalled and distressed development assets through structured solutions." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-8 hover:border-gold/40 transition-all">
                <item.icon className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-heading text-lg text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-4">Strategic Advisory Engagement</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
            Engagements are structured around opportunity scale, complexity and long-term value alignment. Discuss your requirement in confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Discuss a Mandate <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Submit an Asset
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CapitalAdvisory;
