import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on Wollaston Hanks."
        path={location.pathname}
      />
      <section className="min-h-[80vh] flex items-center justify-center bg-navy text-center px-6 py-20">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <span className="inline-block border border-gold/40 px-4 py-1.5 text-gold text-xs tracking-[0.3em] uppercase mb-8">
            Error 404
          </span>
          <h1 className="font-heading text-6xl md:text-8xl text-cream mb-6 leading-none">
            Page Not Found
          </h1>
          <div className="gold-divider mb-8" />
          <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The page you requested could not be located. It may have been moved, renamed or no longer exists. Use the navigation to continue, or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all"
            >
              Return to Home
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              Contact the Platform <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto text-left">
            {[
              { label: "Platform", href: "/platform" },
              { label: "Opportunities", href: "/opportunities" },
              { label: "Developments", href: "/developments" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="border border-gold/20 px-4 py-3 text-xs tracking-widest uppercase text-cream/60 hover:border-gold/60 hover:text-gold transition-all text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
