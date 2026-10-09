"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please write a message.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-400/20";
  const labelStyle = "text-xs uppercase tracking-[0.2em] text-zinc-400";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101013] px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(205,210,220,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-zinc-500">
            Contact
          </p>
          <h2 className="font-heading mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-bold uppercase tracking-[0.15em] text-transparent sm:text-5xl">
            Let&apos;s Talk
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400 sm:text-base">
            Tell us about your project and we will get back to you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-14 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
        >
          <div>
            <label htmlFor="name" className={labelStyle}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputStyle}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputStyle}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className={inputStyle}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(220,225,235,0.5)]"
          >
            Send Message
          </button>

          {submitted && (
            <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-center text-sm text-emerald-300">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}