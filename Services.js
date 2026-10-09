import { Clapperboard, Palette, Lightbulb, Share2 } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Content & Production",
    description:
      "Videos, photos and stories crafted from idea to final edit, ready to captivate your audience.",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Logos, colors and visual identities that give your brand a look people remember.",
  },
  {
    icon: Lightbulb,
    title: "Creative Consulting",
    description:
      "Fresh ideas and clear strategy to shape your brand's direction and grow with purpose.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Content calendars and campaigns that build a loyal community and real engagement.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#101013] px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(205,210,220,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-zinc-500">
            Services
          </p>
          <h2 className="font-heading mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-bold uppercase tracking-[0.15em] text-transparent sm:text-5xl">
            What We Do
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400 sm:text-base">
            Everything your brand needs to stand out online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-zinc-400/50 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-20px_rgba(200,205,215,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 text-zinc-900 transition duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </div>
                  <span className="font-heading text-sm text-zinc-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading mt-8 text-lg font-semibold tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}