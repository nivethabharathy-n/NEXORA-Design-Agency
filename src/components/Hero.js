export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0d] px-6 text-center"
    >
      {/* Silver light from the top */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(205,210,220,0.18),transparent_60%)]" />
      {/* Soft glow from the bottom right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(150,155,170,0.14),transparent_55%)]" />

      {/* Fine grid, fading out toward the edges */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Floating silver orbs */}
      <div className="animate-float pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-zinc-300/10 blur-3xl" />
      <div
        className="animate-float pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-4xl">
        <h1 className="animate-fade-up font-heading bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-bold uppercase tracking-[0.18em] text-transparent sm:text-7xl md:text-8xl">
          Nexora
        </h1>
        <p
          className="animate-fade-up font-heading mt-2 text-sm font-medium uppercase tracking-[0.6em] text-zinc-500 sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          Studio
        </p>

        <div
          className="animate-fade-up mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
          style={{ animationDelay: "0.4s" }}
        />

        <p
          className="animate-fade-up font-tagline mt-8 text-xl italic text-zinc-200 sm:text-2xl md:text-3xl"
          style={{ animationDelay: "0.5s" }}
        >
          Idea Unnodadhu. Impact Nammadhu.
        </p>

        <p
          className="animate-fade-up mx-auto mt-5 max-w-md text-sm tracking-wide text-zinc-400 sm:text-base"
          style={{ animationDelay: "0.7s" }}
        >
          A creative studio for content, branding and digital growth.
        </p>

        <a
          href="#portfolio"
          className="animate-fade-up mt-12 inline-block rounded-full border border-zinc-400/40 bg-white/5 px-9 py-3 text-sm font-medium uppercase tracking-widest text-zinc-100 backdrop-blur transition duration-300 hover:bg-white hover:text-black"
          style={{ animationDelay: "0.9s" }}
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}