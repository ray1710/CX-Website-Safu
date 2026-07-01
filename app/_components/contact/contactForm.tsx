"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold mb-4">
            Contact
          </p>
        </div>

        {/* Form card — lifted off the cream background so the fields read clearly */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-8 sm:p-10 rounded-md shadow-md border border-[#e2dccd]"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold">
                Name <span className="text-[#c9a464]">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={`bg-white border-2 px-4 py-3 text-sm text-[#0e1320] font-normal placeholder:text-[#8a8577] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#c9a464]/30 transition-colors duration-200 ${
                  errors.name
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#c9c2b0] focus:border-[#c9a464]"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold">
                Email <span className="text-[#c9a464]">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`bg-white border-2 px-4 py-3 text-sm text-[#0e1320] font-normal placeholder:text-[#8a8577] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#c9a464]/30 transition-colors duration-200 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-[#c9c2b0] focus:border-[#c9a464]"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold">
              Company
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your organization"
              className="bg-white border-2 border-[#c9c2b0] px-4 py-3 text-sm text-[#0e1320] font-normal placeholder:text-[#8a8577] rounded-sm focus:outline-none focus:border-[#c9a464] focus:ring-2 focus:ring-[#c9a464]/30 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold">
              Service of Interest
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-white border-2 border-[#c9c2b0] px-4 py-3 text-sm text-[#0e1320] font-normal rounded-sm focus:outline-none focus:border-[#c9a464] focus:ring-2 focus:ring-[#c9a464]/30 transition-colors duration-200 appearance-none"
            >
              <option value="">Select a service...</option>
              <option value="training">Customer Service Training</option>
              <option value="consulting">Customer Success Consulting</option>
              <option value="transformation">
                Customer-Centric Transformation
              </option>
              <option value="fractional">Fractional Leadership</option>
              <option value="other">Other / Not Sure Yet</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-semibold">
              Message <span className="text-[#c9a464]">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me a bit about your organization and what you're looking to achieve..."
              className={`bg-white border-2 px-4 py-3 text-sm text-[#0e1320] font-normal placeholder:text-[#8a8577] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#c9a464]/30 transition-colors duration-200 resize-none ${
                errors.message
                  ? "border-red-400 focus:border-red-400"
                  : "border-[#c9c2b0] focus:border-[#c9a464]"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {state === "success" && (
            <p className="text-sm text-green-700 font-medium">
              Message sent! I'll be in touch within one business day.
            </p>
          )}
          {state === "error" && (
            <p className="text-sm text-red-600 font-medium">
              Something went wrong. Please try again or reach out directly at{" "}
              <a
                href="mailto:safira@example.com"
                className="underline hover:text-red-700"
              >
                safira@example.com
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={state === "loading"}
            className="self-start bg-[#0e1320] text-white text-sm font-medium px-10 py-4 rounded-sm hover:bg-[#1a2540] transition-colors duration-200 tracking-wide disabled:opacity-50"
          >
            {state === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
