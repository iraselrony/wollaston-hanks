import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import hotelImg from "@/assets/hotel-repositioning.jpg";

const AssetRepositioning = () => {
  return (
    <Layout>
      <SEO
        title="Asset Repositioning"
        description="Unlocking value in underperforming, distressed and complex real estate. Hotel-to-resort, office-to-residential, estate diversification and stalled scheme transformation."
        path="/platform/asset-repositioning"
      />
      <PageHero
        title="Asset Repositioning"
        subtitle="Unlocking value in underperforming, distressed and complex real estate assets"
        backgroundImage={hotelImg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Strategic Asset Transformation</span>
          <h2 className="font-heading text-3xl text-navy mb-6">Highest & Best Use, Unlocked</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Asset repositioning is a core capability of the Wollaston Hanks platform. The division identifies and executes the strategic transformation of underperforming, underutilised or distressed real estate — turning complex situations into significant development and investment outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The planning-led approach identifies repositioning routes that others overlook. Where conventional advisors see an underperforming asset, the platform sees a structured value-creation opportunity — ready to be delivered.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl text-navy mb-4">Repositioning Capabilities</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four core repositioning typologies — each delivered through planning intelligence, capital structuring and integrated execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Hotel-to-Resort Repositioning", desc: "Transforming underperforming hotel assets into high-value resort, spa and branded residence developments through planning-led extension and reconfiguration." },
              { title: "Office-to-Residential Conversion", desc: "Identifying and executing permitted development and full planning routes for commercial-to-residential and mixed-use conversions in key urban markets." },
              { title: "Estate & Country House Diversification", desc: "Strategic repositioning of landed estates through planning-led development diversification, leisure assets and structured land releases." },
              { title: "Distressed Asset Transformation", desc: "Working with banks, receivers and insolvency practitioners on stalled, distressed or repossessed development assets — restructuring and repositioning to recover and create value." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-8 hover:border-gold/40 transition-all bg-card">
                <h3 className="font-heading text-xl text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">The Repositioning Process</h2>
          <div className="gold-divider mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Asset Diagnostic", d: "Comprehensive review of current performance, planning context and value drivers." },
              { n: "02", t: "Strategy Design", d: "Identification of highest and best use through planning-led repositioning strategy." },
              { n: "03", t: "Capital Structuring", d: "Structuring the right capital partnership — equity, debt, JV or full delivery." },
              { n: "04", t: "Delivery & Exit", d: "Integrated delivery through to operational stabilisation or strategic sale." },
            ].map((step) => (
              <div key={step.n}>
                <span className="text-gold font-heading text-2xl block mb-3">{step.n}</span>
                <h3 className="font-heading text-base text-cream mb-2">{step.t}</h3>
                <p className="text-cream/50 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-4">Hold an Underperforming or Distressed Asset?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
            Submit the asset for confidential strategic review. The platform identifies repositioning routes others miss.
          </p>
          <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Submit Your Asset <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AssetRepositioning;
