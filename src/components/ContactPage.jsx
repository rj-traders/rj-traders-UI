import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CheckCircle, MapPin, Phone, Clock, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedSubject, setSubmittedSubject] = useState("");

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "product-inquiry",
      message: "",
    },
  });

  // Handle validated data submission
  const onSubmit = async (data) => {
    // Optional: Add backend API call logic here
    console.log("Validated Form Data Sent:", data);

    setSubmittedName(data.name);
    setSubmittedSubject(data.subject);
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fadeIn py-16 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-amber-500 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
        </div>

        {/* Header text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Contact Our Help Desk
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Connect directly with Madurai’s most trusted wholesale and retail
            plywood yards. Ask questions, schedule site delivery, or book
            physical appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Modern Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Send an Electronic Query
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    All messages are answered by verified store executives in 1
                    business hour or less.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Your Full Name:
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Full name is required" }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="e.g. Anand Kumar"
                          className={`w-full p-3 bg-slate-50 border ${
                            errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 focus:border-amber-500"
                          } rounded-xl text-sm focus:outline-none transition-all text-slate-800`}
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs font-semibold text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Input Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Phone Number:
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\s-]{10,15}$/,
                          message: "Please enter a valid phone number",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="tel"
                          placeholder="e.g. +91 9876543210"
                          className={`w-full p-3 bg-slate-50 border ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 focus:border-amber-500"
                          } rounded-xl text-sm focus:outline-none transition-all text-slate-800`}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-xs font-semibold text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Input Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Email Address (Optional):
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email format",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          placeholder="e.g. anand@gmail.com"
                          className={`w-full p-3 bg-slate-50 border ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 focus:border-amber-500"
                          } rounded-xl text-sm focus:outline-none transition-all text-slate-800`}
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs font-semibold text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Dropdown Menu Select Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Inquiry Subject:
                    </label>
                    <Controller
                      name="subject"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all text-slate-800"
                        >
                          <option value="product-inquiry">
                            Plywood &amp; Board Specifications
                          </option>
                          <option value="bulk-pricing">
                            Bulk Rate Discount Structure
                          </option>
                          <option value="laminates-veneers">
                            Natural Veneers / Laminate Stock
                          </option>
                          <option value="site-delivery">
                            Site Transit Logistics &amp; Costs
                          </option>
                        </select>
                      )}
                    />
                  </div>
                </div>

                {/* Textarea Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Your Message &amp; Required Volumes:
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        rows="4"
                        placeholder="Tell us details of your kitchen wardrobe sizes or total plywood boards you want to purchase..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all text-slate-800"
                      />
                    )}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-black text-xs uppercase tracking-widest hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Send Verified Message"}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-scaleUp">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-black text-slate-900">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you <strong>{submittedName}</strong>. We have logged
                  your request regarding{" "}
                  <strong>{submittedSubject.replace("-", " ")}</strong>. An
                  expert structural consultant from RJ Plywood will reach out to
                  you within an hour.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    reset(); // Clear form values back to default
                  }}
                  className="px-6 py-2.5 bg-slate-950 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Block: Sidebar Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 text-white p-8 rounded-3xl space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3 text-amber-400">
                Direct Contact Hub
              </h3>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-300">
                      Head Office &amp; Yard:
                    </strong>
                    <span className="text-slate-400">
                      No. 153/2, SRH Building, Alagar Kovil Mian Road, K Pudur,
                      Madurai
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-300">Hotlines:</strong>
                    <a
                      href="tel:+918072808083"
                      className="block text-amber-400 font-bold hover:underline"
                    >
                      +91 8072808083
                    </a>
                    <a
                      href="tel:+919876543211"
                      className="block text-slate-400 hover:underline"
                    >
                      +91 98765 43211
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-300">
                      Working Hours:
                    </strong>
                    <span className="block text-slate-400">
                      Monday - Saturday
                    </span>
                    <span className="text-amber-500 font-bold">
                      9:30 AM - 8:30 PM
                    </span>
                  </div>
                </li>
              </ul>

              {/* Quick Action button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="tel:+918072808083"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-extrabold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call Owner Directly</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder Block */}
            <div className="p-4 bg-white border border-slate-100 rounded-3xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Store GPS Coordinates
              </span>

              <div className="relative h-48 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center space-y-2 px-6">
                  <MapPin className="w-10 h-10 text-amber-500 mx-auto animate-bounce" />
                  <span className="block text-xs font-bold text-slate-800">
                    Near Central Flyover, Madurai
                  </span>
                  <p className="text-[10px] text-slate-500">
                    Directions: Take the second exit under the flyover, we are
                    located 200m ahead on the left.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
