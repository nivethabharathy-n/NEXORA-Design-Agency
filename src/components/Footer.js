const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-center">
      <p className="font-heading bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-xl font-bold uppercase tracking-[0.4em] text-transparent">
        Nexora
      </p>
      <p className="font-tagline mt-3 text-sm italic text-zinc-400">
        Idea Unnodadhu. Impact Nammadhu.
      </p>

      <ul className="mt-6 flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs uppercase tracking-widest text-zinc-500 transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Nexora Studio. All rights reserved.
      </p>
    </footer>
  );
}