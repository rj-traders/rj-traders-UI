import { Link, useNavigate } from "react-router-dom";
import { Award, ChevronRight, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            <span className="text-slate-800">Terms of Service</span>
          </div>
        </div>

        {/* Header Hero Card */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-900 mb-10 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center shrink-0">
            <Award className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              RJ Plywood Policy
            </span>
            <h1 className="text-3xl font-black tracking-tight mt-1">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: June 15, 2026
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm text-sm text-slate-600 space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              1. Acceptance of Conditions
            </h2>
            <p>
              By accessing, browsing, or utilizing the RJ Plywood & Hardwares
              catalog or pricing calculator, you confirm your acceptance of
              these Terms of Service. If you do not agree to these terms, please
              do not utilize our estimation forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              2. Accuracy of Estimations
            </h2>
            <p>
              Prices, sizes, and thicknesses listed on our online catalog are
              base estimations and guide metrics. All listed values:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5 text-xs">
              <li>
                Are subject to market price changes of imported Gurjan, resin
                chemicals, and hardware items.
              </li>
              <li>
                Exclude custom freight transport fees and local VAT / GST taxes
                unless explicitly noted.
              </li>
              <li>
                Must be confirmed through a formal, signed physical invoice
                prepared by our Madurai warehouse executives before delivery
                coordinates are established.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              3. Product Guarantee & Warranty
            </h2>
            <p>
              Our premium materials carry standard manufacturer certifications.
              Warranties (such as the 25-year Marine Plywood warranty or hinge
              cycle tests) are backed directly by the respective brands
              (CenturyPly, Greenply, Hettich, etc.) and are governed by their
              specific usage conditions. Proper storage, wood polishing, and
              installation methods must be followed to maintain warranty
              validity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              4. Intellectual Property
            </h2>
            <p>
              All logo graphics, material layouts, customized estimator
              structures, and photo gallery representations are the exclusive
              property of RJ Plywood & Hardwares. Unauthorised mirroring or
              scraping of catalog values is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              5. Governing Law
            </h2>
            <p>
              Any disputes arising from material purchases, estimates, or
              logistical coordinate failures are subject to the exclusive
              jurisdiction of the courts of Madurai, Tamil Nadu, India.
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
