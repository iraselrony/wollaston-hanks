import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="How Wollaston Hanks collects, uses and protects personal information submitted through the platform."
        path="/privacy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How Wollaston Hanks collects, uses and protects your information"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow prose-content">
          <p className="text-muted-foreground text-sm mb-10">
            <span className="text-gold text-xs tracking-widest uppercase mr-3">Last Updated</span>
            April 2026
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            Wollaston Hanks Ltd ("Wollaston Hanks", "we", "our") is committed to protecting the privacy of those who interact with the platform. This Privacy Policy sets out how we collect, use, store and disclose personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          {[
            {
              h: "1. Who We Are",
              body: (
                <p>
                  Wollaston Hanks is a planning-led strategic development and investment platform operating across the United Kingdom and United States. The data controller for personal information collected via this website is Wollaston Hanks Ltd. Enquiries relating to data protection can be sent to{" "}
                  <a href="mailto:privacy@wollastonhanks.com" className="text-gold underline">
                    privacy@wollastonhanks.com
                  </a>
                  .
                </p>
              ),
            },
            {
              h: "2. Information We Collect",
              body: (
                <>
                  <p className="mb-4">We collect personal information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact details (name, email, phone, company)</li>
                    <li>Opportunity submission details (asset type, location, ownership status, project stage, indicative GDV, expected outcome)</li>
                    <li>Correspondence between you and the platform</li>
                    <li>Technical information collected automatically (IP address, browser type, device, pages visited)</li>
                  </ul>
                </>
              ),
            },
            {
              h: "3. How We Use Information",
              body: (
                <>
                  <p className="mb-4">Information is used solely to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Assess and respond to opportunity submissions and enquiries</li>
                    <li>Conduct due diligence on potential transactions, partners and counterparties</li>
                    <li>Maintain a record of communications</li>
                    <li>Improve the operation of the platform and the security of the website</li>
                    <li>Comply with legal, regulatory and professional obligations</li>
                  </ul>
                </>
              ),
            },
            {
              h: "4. Lawful Basis for Processing",
              body: (
                <p>
                  We process personal information on the basis of (i) your consent, where you submit information through the platform; (ii) our legitimate interests in operating, securing and developing a strategic development and investment platform; and (iii) compliance with legal and regulatory obligations.
                </p>
              ),
            },
            {
              h: "5. Confidentiality",
              body: (
                <p>
                  All opportunity submissions are treated in strict confidence. Information shared with the platform is not disclosed to third parties without your express consent, save where required by law, regulation or to professional advisers acting under equivalent confidentiality obligations.
                </p>
              ),
            },
            {
              h: "6. Data Sharing",
              body: (
                <>
                  <p className="mb-4">We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Trusted service providers who support the operation of the platform (hosting, email delivery, analytics) under contract</li>
                    <li>Professional advisers (legal, accounting, planning) where engaged on a specific opportunity</li>
                    <li>Regulators, law enforcement and competent authorities where required</li>
                  </ul>
                  <p className="mt-4">We do not sell personal information to third parties.</p>
                </>
              ),
            },
            {
              h: "7. International Transfers",
              body: (
                <p>
                  As Wollaston Hanks operates across the United Kingdom and United States, personal information may be transferred outside of the UK. Where this occurs, we rely on adequacy decisions, standard contractual clauses or other lawful transfer mechanisms.
                </p>
              ),
            },
            {
              h: "8. Data Retention",
              body: (
                <p>
                  Personal information is retained only for as long as necessary for the purposes set out above, after which it is securely deleted or anonymised. Records relating to transactions and engagements may be retained for legal, regulatory and professional record-keeping purposes.
                </p>
              ),
            },
            {
              h: "9. Your Rights",
              body: (
                <>
                  <p className="mb-4">Under UK GDPR you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of personal information (in certain circumstances)</li>
                    <li>Restrict or object to processing</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent at any time</li>
                    <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
                  </ul>
                  <p className="mt-4">
                    To exercise any of these rights, contact{" "}
                    <a href="mailto:privacy@wollastonhanks.com" className="text-gold underline">
                      privacy@wollastonhanks.com
                    </a>
                    .
                  </p>
                </>
              ),
            },
            {
              h: "10. Security",
              body: (
                <p>
                  Appropriate technical and organisational measures are in place to protect personal information from unauthorised access, alteration, disclosure or destruction. No system can guarantee absolute security; we operate to professional industry standards and regularly review our controls.
                </p>
              ),
            },
            {
              h: "11. Cookies",
              body: (
                <p>
                  This website uses cookies as set out in the{" "}
                  <a href="/cookies" className="text-gold underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              ),
            },
            {
              h: "12. Changes to this Policy",
              body: (
                <p>
                  This Privacy Policy may be updated from time to time. The latest version will always be available on this page, with the date of the most recent update indicated above.
                </p>
              ),
            },
          ].map((s) => (
            <div key={s.h} className="mb-10">
              <h2 className="font-heading text-xl text-navy mb-4">{s.h}</h2>
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
