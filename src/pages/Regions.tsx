import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import ukRegion from "@/assets/uk-region.jpg";
import usRegion from "@/assets/us-region.jpg";

const RegionsPage = () => {
  return (
    <Layout>
      <SEO
        title="Operating Regions"
        description="Strategic development and investment across the United Kingdom and United States. Cross-market operations with consistent planning-led approach."
        path="/regions"
      />
      <PageHero
        title="Operating Regions"
        subtitle="Strategic development and investment across the United Kingdom and United States"
        backgroundImage={ukRegion}
      />

      <section className="py-16 bg-cream">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Wollaston Hanks operates across the UK and US markets — applying a consistent planning-led, institutional-grade approach to strategic development, asset repositioning and investment in both regions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "United Kingdom",
                tag: "Primary Market",
                image: ukRegion,
                href: "/regions/united-kingdom",
                desc: "Strategic land promotion, mixed-use regeneration, asset repositioning and development partnerships across England, Scotland and Wales.",
              },
              {
                title: "United States",
                tag: "Expanding Operations",
                image: usRegion,
                href: "/regions/united-states",
                desc: "Asset repositioning, hospitality development and investment transactions across key US markets including New York, Florida and California.",
              },
            ].map((region) => (
              <Link key={region.title} to={region.href} className="group">
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img src={region.image} alt={region.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/55 group-hover:bg-navy/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-gold text-xs tracking-[0.25em] uppercase mb-3">{region.tag}</span>
                    <h2 className="font-heading text-3xl md:text-4xl text-cream group-hover:text-gold transition-colors mb-3">{region.title}</h2>
                    <span className="inline-flex items-center gap-2 text-cream/80 text-xs tracking-widest uppercase border-b border-gold/40 pb-1 group-hover:text-gold transition-colors">
                      Explore Region <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{region.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-4">Cross-Border Opportunities</h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto text-sm">
            The platform structures cross-border investment for UK and international clients entering the US market — and vice versa.
          </p>
          <Link to="/contact" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Discuss a Cross-Border Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default RegionsPage;
