import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ChevronRight, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn py-16 bg-slate-50 min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-amber-500 transition-all duration-300 cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <Link to="/" className="hover:text-amber-500">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800">Privacy Policy</span>
          </div>
        </div>

        {/* Header Hero Card */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-900 mb-10 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              RJ Plywood Policy
            </span>
            <h1 className="text-3xl font-black tracking-tight mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: June 15, 2026
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm text-sm text-slate-600 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              1. Information We Collect
            </h2>
            <p>
              At RJ Plywood & Hardwares, we respect your privacy. When you
              request a quote, submit a contact form, or query product
              specifications, we collect information you choose to provide. This
              typically includes:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5 text-xs">
              <li>
                <strong>Personal Identifiers:</strong> Name, phone number,
                physical delivery address, and email address.
              </li>
              <li>
                <strong>Project Inquiries:</strong> Floor plans, carpentry
                dimensions, cutting lists, and specific product quantity
                requests.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              2. How We Use Your Data
            </h2>
            <p>
              The information we gather is used strictly to fulfill your
              architectural and construction material enquiries. We use this
              data to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5 text-xs">
              <li>
                Provide accurate budget estimations and shipping coordinates.
              </li>
              <li>
                Communicate directly regarding transport schedules, stock
                availabilities, or custom pricing.
              </li>
              <li>
                Verify the identity of contractors or builders who request bulk
                rate listings.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              3. Data Protection and Retention
            </h2>
            <p>
              We implement industry-standard electronic and physical safety
              procedures to safeguard your personal metrics. Your structural
              blueprints, contact details, and floor plans are stored securely
              and accessed only by authorized store managers. We do not sell or
              lease your information to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              4. Cookies and Analytical Tracking
            </h2>
            <p>
              Our website uses basic standard cookies to retain local layout
              states (such as active product filters, lightbox configurations,
              and active subpage views). These cookies do not store any
              personally identifiable info and automatically clear based on your
              browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              5. Contact Our Privacy Administrator
            </h2>
            <p>
              If you have any questions about this policy, or if you would like
              to request the immediate erasure of your submitted floor plans or
              contact phone numbers, please reach out to us:
            </p>
            <p className="text-xs bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
              <strong>RJ Plywood & Hardwares Yard Office</strong>
              <br />
              No. 153/2, SRH Building, Alagar Kovil Mian Road, K Pudur, Madurai
              <br />
              Email:{" "}
              <a
                href="mailto:info@rjplywood.com"
                className="text-amber-600 hover:underline"
              >
                info@rjplywood.com
              </a>{" "}
              | Hotlines: +91 80728 08083
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
