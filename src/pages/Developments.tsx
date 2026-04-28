import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import marinaDev from "@/assets/marina-development.jpg";
import mixedUse from "@/assets/mixed-use-development.jpg";
import strategicLand from "@/assets/strategic-land.jpg";
import hotelRepo from "@/assets/hotel-repositioning.jpg";

const caseStudies = [
  {
    title: "Marina Resort & Spa Development",
    location: "Coastal UK",
    type: "Hospitality & Leisure",
    status: "Featured Case Study",
    gdv: "Project value now in the billions",
    acquisition: "Site secured: £2M",
    description:
      "Transformative coastal regeneration project. The platform identified a strategically located coastal site with significant repositioning potential, secured the asset for £2M, and led the planning strategy to deliver consent for a major resort and spa development. A definitive demonstration of the platform's planning-led, value-creation approach.",
    bullets: [
      "Strategic site identification and acquisition",
      "Planning uplift through strategic land promotion",
      "Transformation from underperforming asset to major resort development",
      "Estimated project value now in the billions",
    ],
    image: marinaDev,
  },
  {
    title: "Mixed-Use Urban Regeneration",
    location: "Northern England",
    type: "Regeneration",
    status: "Illustrative Opportunity",
    gdv: "£120M+ GDV",
    description:
      "A major urban regeneration scheme combining residential, commercial and public realm improvements on a former industrial site. Demonstrates the platform's capability to originate complex multi-tenure regeneration through planning-led strategy.",
    bullets: [
      "Multi-tenure mixed-use programme",
      "Public realm and infrastructure-led",
      "Strategic land assembly and planning consent",
      "Phased delivery and capital partnership structure",
    ],
    image: mixedUse,
  },
  {
    title: "Strategic Land Promotion — South East",
    location: "South East England",
    type: "Strategic Development",
    status: "Development Investment Thesis",
    gdv: "£75M–£150M+ GDV",
    description:
      "Strategic land promotion opportunity on green belt land adjacent to a major settlement. Planning strategy designed to secure allocation through the local plan and deliver outline consent — illustrative of the platform's land promotion capability.",
    bullets: [
      "Local plan engagement and policy intelligence",
      "Strategic landowner and option structuring",
      "Outline consent strategy",
      "Institutional disposal at planning gain",
    ],
    image: strategicLand,
  },
  {
    title: "Hotel-to-Luxury Resort Repositioning",
    location: "South West England",
    type: "Asset Repositioning",
    status: "Illustrative Opportunity",
    gdv: "£50M–£90M GDV",
    description:
      "Repositioning an underperforming coastal hotel into a luxury boutique resort through planning-led extension and brand repositioning strategy — illustrative of the platform's repositioning capability.",
    bullets: [
      "Asset diagnostic and repositioning strategy",
      "Planning consent for extension and reconfiguration",
      "Capital structuring and operational partner identification",
      "Delivery through stabilisation",
    ],
    image: hotelRepo,
  },
];

const DevelopmentsPage = () => {
  return (
    <Layout>
      <SEO
        title="Developments & Projects"
        description="Case studies, development theses and illustrative repositioning opportunities demonstrating the strategic capability of Wollaston Hanks."
        path="/developments"
      />
      <PageHero
        title="Developments & Projects"
        subtitle="Case studies, development theses and strategic project opportunities"
        backgroundImage={marinaDev}
      />

      <section className="py-12 bg-cream">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            The portfolio includes real case studies, illustrative opportunities and development investment theses — demonstrating the platform's capability to originate, structure and deliver institutional-scale outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="space-y-20">
            {caseStudies.map((project, index) => (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="text-xs tracking-wider uppercase text-gold border border-gold/40 px-3 py-1">{project.type}</span>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1">{project.status}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">{project.title}</h2>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                  </p>
                  <p className="text-gold text-xs tracking-wider font-medium mb-6">
                    {project.gdv}
                    {project.acquisition && <span className="text-muted-foreground ml-3">· {project.acquisition}</span>}
                  </p>
                  <div className="gold-divider-left mb-6" />
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <ul className="space-y-2">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                    <div className="absolute inset-0 border border-gold/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-4">Have a Development Opportunity?</h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto text-sm">
            Submit institutional-scale development, regeneration or repositioning opportunities for confidential review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit an Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
            <Link to="/opportunities" className="px-8 py-3.5 border border-cream/30 text-cream/70 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              View Active Pipeline
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentsPage;
