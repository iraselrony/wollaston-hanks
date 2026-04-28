import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const opportunities = [
  {
    title: "Strategic Land Promotion — South East",
    location: "South East, UK",
    type: "Strategic Development",
    status: "Active",
    gdv: "£75M–£150M GDV",
    narrative: "Landholding with significant latent planning potential identified through strategic analysis of local plan allocations. Platform engaged to structure promotion agreement, lead planning strategy and deliver consent uplift ahead of institutional disposal.",
  },
  {
    title: "Mixed-Use Regeneration Scheme",
    location: "Northern England",
    type: "Regeneration",
    status: "Active",
    gdv: "£120M+ GDV",
    narrative: "Underperforming town centre asset introduced by a regional bank. Platform originating a comprehensive mixed-use regeneration strategy — residential, commercial and leisure — through a structured development partnership with planning-led uplift.",
  },
  {
    title: "Hotel Repositioning Opportunity",
    location: "Coastal Resort, UK",
    type: "Asset Repositioning",
    status: "Active",
    gdv: "£50M–£90M GDV",
    narrative: "Distressed hospitality asset with significant repositioning and extension potential. Platform controlling acquisition strategy, planning promotion and capital structuring to deliver a premium resort and spa development.",
  },
  {
    title: "Development Partnership — Greater London",
    location: "Greater London",
    type: "Development Partnership",
    status: "Active",
    gdv: "£200M+ GDV",
    narrative: "Complex consented site requiring institutional-level development management and capital partnership. Wollaston Hanks engaged to structure and lead delivery — coordinating planning, design, infrastructure and phased delivery.",
  },
  {
    title: "Commercial Redevelopment Site",
    location: "Midlands, UK",
    type: "Commercial",
    status: "Pipeline",
    gdv: "£60M–£100M GDV",
    narrative: "Redundant commercial asset with change-of-use and redevelopment potential. Platform appraising planning strategy and capital structuring options ahead of formal engagement.",
  },
  {
    title: "Luxury Residential Development",
    location: "South West, UK",
    type: "Residential",
    status: "Pipeline",
    gdv: "£55M–£80M GDV",
    narrative: "High-end residential development opportunity in a desirable coastal location. Platform assessing land assembly, planning and delivery structure for a premium scheme.",
  },
  {
    title: "Strategic Land — New York Tri-State",
    location: "New York, US",
    type: "Strategic Development",
    status: "Pipeline",
    gdv: "$150M+ GDV",
    narrative: "Large-format land holding with significant development potential across mixed-use and residential categories. Platform originating planning and development strategy with US advisory partners.",
  },
  {
    title: "Resort & Spa Repositioning",
    location: "Florida, US",
    type: "Hospitality",
    status: "Pipeline",
    gdv: "$75M–$130M GDV",
    narrative: "Underperforming hospitality asset in a high-demand leisure market. Platform leading repositioning strategy, design and capital structure to unlock premium resort value.",
  },
];

const OpportunitiesPage = () => {
  return (
    <Layout>
      <SEO
        title="Current Opportunities"
        description="Active and pipeline development, regeneration and repositioning opportunities across the UK and US — £50M+ GDV, institutional scale, originated through controlled deal flow."
        path="/opportunities"
      />
      <PageHero
        title="Current Opportunities"
        subtitle="Institutional-scale development and repositioning opportunities across the UK and United States"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Active Deal Flow</h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Wollaston Hanks maintains a controlled pipeline of strategic development, repositioning and investment opportunities — all at institutional scale. Opportunities are originated through planning portals, development agents, banks, insolvency practitioners and direct landowner relationships.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
            Access to off-market opportunities is available to qualified investors, asset managers and development partners. Engagements are selective and structured based on opportunity scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              { label: "Minimum Scale", value: "£50M+ GDV" },
              { label: "Deal Types", value: "Strategic Land, Regeneration, Repositioning, Partnership" },
              { label: "Access", value: "Qualified Investors & Partners Only" },
            ].map((stat) => (
              <div key={stat.label} className="border border-gold/30 p-6">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{stat.label}</p>
                <p className="font-heading text-base text-navy">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="border border-border p-8 hover:border-gold/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-wider uppercase text-gold">{opp.type}</span>
                  <span className={`text-xs tracking-wider uppercase px-3 py-1 ${opp.status === "Active" ? "bg-gold/10 text-gold" : "bg-muted text-muted-foreground"}`}>
                    {opp.status}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-navy mb-1">{opp.title}</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" /> {opp.location}
                </p>
                <p className="text-gold text-xs tracking-wider font-medium mb-4">{opp.gdv}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{opp.narrative}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-4">Introduce an Opportunity</h2>
          <p className="text-cream/60 mb-4 max-w-xl mx-auto text-sm">
            Banks, insolvency practitioners, agents and landowners are welcome to introduce opportunities. All submissions are reviewed in strict confidence.
          </p>
          <p className="text-cream/40 text-xs mb-8 max-w-lg mx-auto">
            We selectively engage on opportunities at £50M+ GDV. Submissions below this threshold are unlikely to proceed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-cream/30 text-cream/70 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              Investor Enquiry
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpportunitiesPage;
