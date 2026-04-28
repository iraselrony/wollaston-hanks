import { useState } from "react";
import { MapPin, Phone, Mail, Lock, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";
import { submitForm } from "@/lib/submitForm";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitForm("contact", formData);
    setLoading(false);
    if (result.ok) {
      toast.success("Message received. The platform will respond within 24 hours.");
      setSubmitted(true);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Discuss a development opportunity, investment partnership or strategic requirement with Wollaston Hanks. Operating across the UK and United States."
        path="/contact"
      />
      <PageHero
        title="Contact"
        subtitle="Discuss a development opportunity, investment partnership or strategic requirement"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Engage</span>
              <h2 className="font-heading text-2xl text-navy mb-6">A Selective Platform</h2>
              <div className="gold-divider-left mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wollaston Hanks selectively partners on a limited number of high-value engagements. The platform welcomes serious enquiries from landowners, investors, institutions, banks and developers operating at institutional scale.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: Lock, title: "Confidential", body: "All correspondence treated with strict discretion." },
                  { icon: ShieldCheck, title: "Qualified", body: "Engagements structured around opportunity scale." },
                  { icon: Clock, title: "Responsive", body: "Qualified enquiries reviewed within 24 hours." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-heading text-sm text-navy mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Offices</h3>
                    <p className="text-muted-foreground text-sm">London, United Kingdom</p>
                    <p className="text-muted-foreground text-sm">New York, United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+44 (0)1234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">contact@wollastonhanks.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-20 border border-gold/40 bg-card">
                  <div className="mb-6">
                    <span className="inline-block border border-gold/40 px-4 py-1.5 text-gold text-xs tracking-[0.3em] uppercase">Received</span>
                  </div>
                  <h3 className="font-heading text-2xl text-navy mb-4">Message Received</h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
                    Your enquiry has been received in strict confidence. A member of the platform will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 space-y-6">
                  <div>
                    <h3 className="font-heading text-lg text-navy mb-1">Send a Message</h3>
                    <p className="text-muted-foreground text-sm mb-6">All fields marked with * are required.</p>
                  </div>

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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Subject *</label>
                    <select name="subject" required value={formData.subject} onChange={handleChange}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select subject</option>
                      <option value="development">Development Opportunity</option>
                      <option value="investment">Investment Partnership</option>
                      <option value="advisory">Strategic Advisory</option>
                      <option value="transaction">Transaction Advisory</option>
                      <option value="capital">Capital Introduction</option>
                      <option value="press">Press / Media Enquiry</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase text-navy mb-2">Message *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={6}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Describe your opportunity, requirement or area of interest." />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-10 py-3.5 bg-navy text-gold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors border border-gold/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-muted-foreground text-xs mt-4">
                      Submitted in strict confidence.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
