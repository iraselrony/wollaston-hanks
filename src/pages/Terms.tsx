import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Use"
        description="Terms governing use of the Wollaston Hanks website and platform."
        path="/terms"
      />
      <PageHero
        title="Terms of Use"
        subtitle="Terms governing use of the Wollaston Hanks website and platform"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <p className="text-muted-foreground text-sm mb-10">
            <span className="text-gold text-xs tracking-widest uppercase mr-3">Last Updated</span>
            April 2026
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            These Terms of Use govern your access to and use of www.wollastonhanks.com (the "Site"). By accessing or using the Site, you agree to be bound by these terms. If you do not accept these terms, you should not use the Site.
          </p>

          {[
            {
              h: "1. The Platform",
              body: (
                <p>
                  The Site is operated by Wollaston Hanks Ltd ("Wollaston Hanks", "we", "our"), a planning-led strategic development and investment platform. The Site provides information about the platform, its capabilities and current opportunities.
                </p>
              ),
            },
            {
              h: "2. No Offer or Solicitation",
              body: (
                <p>
                  Information on the Site is provided for general purposes and does not constitute a financial promotion, offer, recommendation or solicitation to buy, sell or invest in any property, security or financial product. References to opportunities, indicative values or potential outcomes are illustrative and do not constitute a guarantee of any return.
                </p>
              ),
            },
            {
              h: "3. Selectivity & Engagement",
              body: (
                <p>
                  Wollaston Hanks selectively partners on a limited number of opportunities. Submission of an opportunity, enquiry or correspondence does not create an engagement, advisory relationship or contract. Engagements are formed only following written agreement between Wollaston Hanks and a counterparty.
                </p>
              ),
            },
            {
              h: "4. Confidentiality",
              body: (
                <p>
                  Submissions to the platform are treated in strict confidence in accordance with our{" "}
                  <a href="/privacy" className="text-gold underline">
                    Privacy Policy
                  </a>
                  . You should not submit any information that you wish to remain wholly proprietary or that is subject to a third-party non-disclosure agreement without first ensuring that disclosure is permitted.
                </p>
              ),
            },
            {
              h: "5. Accuracy of Information",
              body: (
                <p>
                  While we take reasonable care to ensure the Site is accurate and up to date, no warranty is given that the content is complete, current or free from error. The Site may contain forward-looking statements, planning commentary or indicative figures which are subject to change.
                </p>
              ),
            },
            {
              h: "6. Intellectual Property",
              body: (
                <p>
                  All content on the Site — including text, graphics, logos, images, video and software — is owned by Wollaston Hanks or its licensors and is protected by copyright and other intellectual property laws. No part of the Site may be reproduced, distributed or used for commercial purposes without prior written consent.
                </p>
              ),
            },
            {
              h: "7. Use of the Site",
              body: (
                <>
                  <p className="mb-4">You agree not to use the Site:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>In any unlawful or fraudulent manner</li>
                    <li>To submit content you are not authorised to share</li>
                    <li>To introduce viruses, malicious code or attempt to compromise the Site's security</li>
                    <li>To collect data through automated means without consent</li>
                  </ul>
                </>
              ),
            },
            {
              h: "8. Third-Party Links",
              body: (
                <p>
                  The Site may contain links to third-party websites. Wollaston Hanks does not endorse and is not responsible for the content or practices of any linked third-party site.
                </p>
              ),
            },
            {
              h: "9. Limitation of Liability",
              body: (
                <p>
                  To the fullest extent permitted by law, Wollaston Hanks excludes liability for any indirect, consequential or special loss arising out of use of the Site. Nothing in these terms limits liability for fraud, death or personal injury caused by negligence, or any other liability that cannot be excluded by law.
                </p>
              ),
            },
            {
              h: "10. Governing Law",
              body: (
                <p>
                  These Terms of Use are governed by the laws of England and Wales. Any disputes arising in connection with the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              ),
            },
            {
              h: "11. Contact",
              body: (
                <p>
                  Questions regarding these Terms of Use can be sent to{" "}
                  <a href="mailto:contact@wollastonhanks.com" className="text-gold underline">
                    contact@wollastonhanks.com
                  </a>
                  .
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

export default Terms;
