import { Link } from "react-router-dom";
import { ArrowRight, HardHat, Hammer, Zap, Eye, Paintbrush, Users, Cable } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const capabilities = [
  {
    icon: HardHat,
    title: "Development Management",
    description: "Full-cycle project control from planning consent through construction and practical completion. The platform owns the development process — quality, programme and budget — rather than passing it to a third party.",
  },
  {
    icon: Hammer,
    title: "Contractor & Consultant Coordination",
    description: "Strategic procurement and management of specialist contractors, consultants and professional teams across complex multi-disciplinary delivery on major schemes.",
  },
  {
    icon: Zap,
    title: "Infrastructure Delivery",
    description: "Delivery of essential site infrastructure including roads, drainage, utilities and services. Ensuring developments are technically viable and construction-ready from day one.",
  },
  {
    icon: Cable,
    title: "Commercial Electrical Infrastructure",
    description: "Specialist capability in commercial power infrastructure and energy systems for major developments — from grid connections to on-site generation, EV and distribution networks.",
  },
  {
    icon: Eye,
    title: "Development Visualisation",
    description: "CGI, masterplan visualisation, concept design imagery and planning consultation materials. Visual narratives that win consents and engage institutional capital.",
  },
  {
    icon: Paintbrush,
    title: "Interior & Spatial Design",
    description: "Luxury residential, hospitality and leisure asset interior and spatial design. Ensuring developments achieve highest standards of design quality and market positioning.",
  },
  {
    icon: Users,
    title: "Public Consultation & Stakeholder Strategy",
    description: "Designing and delivering public consultation strategies that build community support and satisfy planning requirements at every level — from local communities to institutional partners.",
  },
];

const DevelopmentDelivery = () => {
  return (
    <Layout>
      <SEO
        title="Development Delivery"
        description="Full-cycle development delivery capability — planning, design, infrastructure, construction management and stakeholder engagement. The platform controls and delivers projects."
        path="/platform/development-delivery"
      />
      <PageHero
        title="Development Delivery"
        subtitle="Full-cycle execution capability — the platform controls and delivers projects"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Proof of Execution</span>
          <h2 className="font-heading text-3xl text-navy mb-6">Control From Concept to Completion</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks does not hand projects off at the point of consent. The platform maintains full-cycle development delivery capability — from concept and planning through construction, fit-out and completion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is what gives institutional capital confidence. Strategic vision, planning intelligence and execution capability operate as a single coordinated system — not three separate consultancies stitched together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl text-navy mb-4">Integrated Capabilities</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seven integrated delivery functions — each retained in-house or through long-standing strategic partnerships.
            </p>
          </div>
          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className={`grid grid-cols-1 lg:grid-cols-[100px_1fr_auto] gap-6 items-start border border-border p-8 hover:border-gold/40 transition-all bg-card`}
              >
                <div className="flex items-center">
                  <span className="text-gold/30 font-heading text-3xl mr-4">{String(index + 1).padStart(2, "0")}</span>
                  <cap.icon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">A Single Coordinated System</h2>
          <div className="gold-divider mb-8" />
          <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Every capability is integrated within the platform. Strategic vision, planning intelligence and execution capability operate as one — ensuring developments are originated, structured and delivered without compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit a Development
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              Discuss a Project <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentDelivery;
