import { FiExternalLink } from "react-icons/fi";
import projects from "../assets/data";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#111111] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto md:pl-64">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Portfolio
          </p>

          <h2 className="inline-block border-b-4 border-[#d4af37] pb-2 text-3xl font-bold text-white md:text-4xl">
            Selected Works
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A selection of web applications and digital experiences I have
            developed collaboratively and independently, combining thoughtful
            design with practical engineering.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-2xl"
            >
              {/* Project image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </a>

              {/* Project information */}
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="shrink-0 rounded-full border border-white/10 p-2 text-gray-400 transition duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="mb-6 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technology stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-sm border border-[#d4af37]/30 bg-[#d4af37]/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#d4af37]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Live project link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:text-[#d4af37]"
                >
                  View Live Project
                  <FiExternalLink className="text-sm" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
