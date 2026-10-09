import Image from "next/image";

const projects = [
  {
    title: "The .Jannal",
    category: "Content & Production",
    image: "/portfolio/project-1.jpg",
    fit: "cover",
    bg: "#c98f5e",
  },
  {
    title: "Deyga",
    category: "Branding",
    image: "/portfolio/project-2.jpg",
    fit: "contain",
    bg: "#fafafa",
  },
  {
    title: "Kaii.Madras",
    category: "Content & Production",
    image: "/portfolio/project-3.jpg",
    fit: "contain",
    bg: "#ffffff",
  },
  {
    title: "Cookd",
    category: "Social Media Marketing",
    image: "/portfolio/project-4.jpg",
    fit: "contain",
    bg: "#fdf3e6",
  },
  {
    title: "Million Dollar Studios",
    category: "Branding",
    image: "/portfolio/project-5.jpg",
    fit: "contain",
    bg: "#ffffff",
  },
  {
    title: "Bhavyarameshjewelry",
    category: "Creative Consulting",
    image: "/portfolio/project-6.jpg",
    fit: "cover",
    bg: "#2a1a0e",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0b0b0d] px-6 py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-zinc-500">
            Portfolio
          </p>
          <h2 className="font-heading mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-bold uppercase tracking-[0.15em] text-transparent sm:text-5xl">
            Our Work
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-400 sm:text-base">
            A few projects we are proud of.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              style={{ backgroundColor: project.bg }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 transition duration-500 hover:-translate-y-2 hover:border-zinc-300/60 hover:shadow-[0_25px_70px_-20px_rgba(200,205,215,0.35)]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`saturate-[1.45] contrast-[1.08] brightness-[1.03] transition duration-700 group-hover:scale-105 group-hover:saturate-[1.7] ${
                  project.fit === "contain"
                    ? "object-contain p-6 sm:p-8"
                    : "object-cover object-center"
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-7 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-300">
                  {project.category}
                </p>
                <h3 className="font-heading mt-1 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}