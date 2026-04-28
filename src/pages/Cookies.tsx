import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const Cookies = () => {
  return (
    <Layout>
      <SEO
        title="Cookie Policy"
        description="How Wollaston Hanks uses cookies on this website."
        path="/cookies"
      />
      <PageHero
        title="Cookie Policy"
        subtitle="How Wollaston Hanks uses cookies on this website"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <p className="text-muted-foreground text-sm mb-10">
            <span className="text-gold text-xs tracking-widest uppercase mr-3">Last Updated</span>
            April 2026
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            This Cookie Policy explains how Wollaston Hanks Ltd uses cookies and similar technologies on www.wollastonhanks.com.
          </p>

          <div className="mb-10">
            <h2 className="font-heading text-xl text-navy mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve performance and provide information to site owners.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-xl text-navy mb-4">2. Categories of Cookies We Use</h2>

            <div className="border border-gold/30 p-6 mb-4 bg-card">
              <h3 className="font-heading text-base text-navy mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Required for the operation of the Site, including session management, security and remembering your cookie preferences. These cookies do not require consent.
              </p>
            </div>

            <div className="border border-gold/30 p-6 mb-4 bg-card">
              <h3 className="font-heading text-base text-navy mb-2">Performance & Analytics Cookies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Used to understand how the Site is used, including traffic sources, page performance and aggregate visitor patterns. These help us improve the platform. Set only with your consent.
              </p>
            </div>

            <div className="border border-gold/30 p-6 bg-card">
              <h3 className="font-heading text-base text-navy mb-2">Functional Cookies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Allow the Site to remember preferences and provide enhanced functionality. Set only with your consent.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-xl text-navy mb-4">3. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you first visit the Site, you will be presented with a cookie notice allowing you to accept all cookies or limit your consent to essential cookies only.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can change your preferences at any time by clearing your browser cookies for this Site, after which the cookie notice will reappear on your next visit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most browsers allow you to control cookies through their settings. Information on managing cookies is available at{" "}
              <a href="https://www.aboutcookies.org" className="text-gold underline" rel="noopener noreferrer" target="_blank">
                aboutcookies.org
              </a>
              .
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-xl text-navy mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Where third-party services (such as analytics providers or embedded video) place cookies on your device, we ensure these are configured in line with our consent settings. Such providers operate under their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-navy mb-4">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about how we use cookies, contact{" "}
              <a href="mailto:privacy@wollastonhanks.com" className="text-gold underline">
                privacy@wollastonhanks.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
