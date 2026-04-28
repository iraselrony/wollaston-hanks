import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const SubmitOpportunity = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    enquiryType: "",
    assetType: "",
    location: "",
    ownershipStatus: "",
    projectStage: "",
    gdvRange: "",
    expectedOutcome: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        title="Submit an Opportunity"
        subtitle="Wollaston Hanks reviews a limited number of opportunities. All submissions are assessed in strict confidence."
        backgroundImage={heroBg}
      />

      {/* Selectivity Signal */}
      <section className="py-16 bg-navy">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl text-cream mb-6">A Selective Platform</h2>
          <div className="gold-divider mb-8" />
          <p className="text-cream/70 leading-relaxed max-w-2xl mx-auto mb-4">
            We do not take on every opportunity. Wollaston Hanks selectively partners on a limited number of high-value engagements — structured around opportunity scale, complexity and long-term value creation.
          </p>
          <p className="text-cream/50 text-sm max-w-xl mx-auto">
            Opportunities are assessed based on scale, planning potential, ownership clarity and strategic fit. We operate at £50M+ GDV. Submissions significantly below this threshold are unlikely to proceed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              { label: "Confidentiality", value: "All submissions treated with strict discretion" },
              { label: "Response", value: "Qualified opportunities reviewed within 5 working days" },
              { label: "Threshold", value: "£50M+ GDV — institutional scale only" },
            ].map((item) => (
              <div key={item.label} className="border border-gold/20 p-6">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{item.label}</p>
                <p className="text-cream/70 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Submit */}
      <section className="py-16 bg-cream">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Landowners", desc: "Strategic land, development sites and landholdings with latent planning potential." },
              { title: "Banks & Institutions", desc: "Distressed assets, loan security and portfolio disposals requiring development strategy." },
              { title: "Agents & Advisors", desc: "Off-market introductions from insolvency practitioners, solicitors and development agents." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/30 p-8 bg-card">
                <h3 className="font-heading text-lg text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-card">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Opportunity Submission</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Complete the form below. The information provided allows us to assess strategic fit before making contact.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-20 border border-gold/40 bg-cream">
              <div className="mb-6">
                <span className="inline-block border border-gold/40 px-4 py-1.5 text-gold text-xs tracking-[0.3em] uppercase">Received</span>
              </div>
              <h3 className="font-heading text-2xl text-navy mb-4">Submission Under Review</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
                Your submission has been received and will be assessed in strict confidence. If the opportunity meets our criteria, a member of the platform will be in contact within 5 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-cream border border-border p-8 md:p-12 space-y-8">

              {/* Contact Details */}
              <div>
                <h3 className="font-heading text-lg text-navy mb-6 pb-3 border-b border-border">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Company / Organisation</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Your Role / Capacity *</label>
                    <select name="role" required value={formData.role} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select your role</option>
                      <option value="landowner">Landowner</option>
                      <option value="investor">Investor / Asset Manager</option>
                      <option value="developer">Developer</option>
                      <option value="bank">Bank / Lender / Institution</option>
                      <option value="insolvency">Insolvency Practitioner</option>
                      <option value="agent">Development Agent</option>
                      <option value="solicitor">Solicitor / Legal Advisor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Opportunity Details */}
              <div>
                <h3 className="font-heading text-lg text-navy mb-6 pb-3 border-b border-border">Opportunity Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Opportunity Type *</label>
                    <select name="assetType" required value={formData.assetType} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select type</option>
                      <option value="strategic-land">Strategic Land</option>
                      <option value="development-site">Consented Development Site</option>
                      <option value="mixed-use">Mixed-Use Regeneration</option>
                      <option value="hospitality">Hospitality / Hotel</option>
                      <option value="commercial">Commercial Asset</option>
                      <option value="residential">Residential Development</option>
                      <option value="distressed">Distressed / Loan Security Asset</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Location *</label>
                    <input type="text" name="location" required value={formData.location} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors"
                      placeholder="City, region or country" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Ownership Status *</label>
                    <select name="ownershipStatus" required value={formData.ownershipStatus} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select status</option>
                      <option value="freehold-owned">Freehold — Owned Outright</option>
                      <option value="freehold-mortgaged">Freehold — Subject to Charge / Finance</option>
                      <option value="leasehold">Leasehold</option>
                      <option value="option">Under Option</option>
                      <option value="receivership">Receivership / Administration</option>
                      <option value="trust">Trust / Estate</option>
                      <option value="joint">Joint Ownership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Project Stage *</label>
                    <select name="projectStage" required value={formData.projectStage} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select stage</option>
                      <option value="pre-planning">Pre-Planning — No Consent</option>
                      <option value="planning-progress">Planning Application in Progress</option>
                      <option value="consented">Consented — Ready to Develop</option>
                      <option value="stalled">Stalled / Distressed</option>
                      <option value="operational">Operational Asset — Repositioning Required</option>
                      <option value="land-promotion">Strategic Land Promotion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Estimated GDV / Asset Value *</label>
                    <select name="gdvRange" required value={formData.gdvRange} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select estimated range</option>
                      <option value="50-100m">£50M – £100M</option>
                      <option value="100-250m">£100M – £250M</option>
                      <option value="250-500m">£250M – £500M</option>
                      <option value="500m+">£500M+</option>
                      <option value="usd-50-150m">$50M – $150M (US)</option>
                      <option value="usd-150m+">$150M+ (US)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Expected Outcome *</label>
                    <select name="expectedOutcome" required value={formData.expectedOutcome} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select outcome</option>
                      <option value="planning-uplift">Planning Uplift & Strategic Sale</option>
                      <option value="development-partnership">Development Partnership</option>
                      <option value="capital-introduction">Capital Introduction</option>
                      <option value="full-delivery">Full Delivery & Exit</option>
                      <option value="asset-repositioning">Asset Repositioning</option>
                      <option value="advisory">Strategic Advisory Only</option>
                      <option value="open">Open — Seeking Guidance</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-heading text-lg text-navy mb-6 pb-3 border-b border-border">Opportunity Summary</h3>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-navy mb-2">Brief Description *</label>
                  <textarea name="description" required value={formData.description} onChange={handleChange} rows={6}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Describe the opportunity — including current status, planning position, key constraints and any relevant context. The more precise, the better." />
                </div>
              </div>

              <div className="text-center pt-2">
                <button type="submit" className="px-12 py-4 bg-navy text-gold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors border border-gold/40">
                  Submit for Review
                </button>
                <p className="text-muted-foreground text-xs mt-4">
                  Submitted in strict confidence. The platform will respond to qualified opportunities within 5 working days.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SubmitOpportunity;
