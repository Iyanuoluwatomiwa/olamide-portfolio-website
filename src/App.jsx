import Sidebar from "./layout/Sidebar";
import { LuDatabase } from "react-icons/lu";
import { FaCode, FaTools, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCertificate } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { MdPsychology } from "react-icons/md";
import Projects from "./layout/Projects";

function App() {
  return (
    <div className="flex w-full min-h-screen overflow-x-hidden">
      <Sidebar />
      <a
        href="https://wa.me/2349066681038"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white font-semibold shadow-lg transition duration-300 hover:bg-green-600 hover:scale-105"
      >
        <FaWhatsapp className="text-xl" />
        Let's Talk
      </a>

      <main className="flex-1 font-sans">
        <section
          id="about"
          className="min-h-screen w-full flex items-center bg-gradient-to-r from-blue-200 to-blue-300 overflow-hidden"
        >
          <div className="w-full px-6 py-20 md:pl-72 md:pr-12 lg:pr-20">
            <div className="w-full max-w-6xl">
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Hello, my name is
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-5">
                Odewenu Olamide
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
                Full-Stack Developer <span className="text-blue-700">|</span>{" "}
                Linguist <span className="text-blue-700">|</span> Language
                Technology Enthusiast
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-8 max-w-5xl mb-6">
                I build modern, responsive, and user-focused web applications
                across the frontend and backend, working with technologies such
                as React, TypeScript, Node.js, Express, PostgreSQL, and REST
                APIs.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-8 max-w-5xl mb-8">
                With a background in <strong>Linguistics</strong>, I am also
                exploring the intersection of language and technology, with a
                growing focus on{" "}
                <strong>
                  Computational Linguistics, Natural Language Processing (NLP)
                </strong>
                , and language data. My recent training in African Computational
                Linguistics has given me practical exposure to{" "}
                <strong>
                  data annotation, speech annotation, language-data preparation,
                  Praat, Label Studio, Python, R, and data adaptation
                </strong>
                .
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/hire"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg shadow-md transition duration-300 font-semibold"
                >
                  Hire Me
                </Link>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center border-2 border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white px-7 py-3 rounded-lg transition duration-300 font-semibold"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="min-h-screen bg-gray-200 px-6 py-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b-4 border-orange-400 inline-block">
              Experience
            </h2>

            {/* Full-Stack Development */}
            <div className="mb-16">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Full-Stack Developer
                  </h3>

                  <p className="text-lg font-medium text-blue-700 mt-1">
                    Personal & Collaborative Projects
                  </p>
                </div>

                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  2025 – Present
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Developed a fully functional <strong>Book Store App</strong>{" "}
                    with CRUD operations (Create, Read, Update, Delete) using
                    React, Node.js, Express, PostgreSQL, and Prisma ORM,
                    including user authentication and book management.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Created a responsive <strong>Todo App</strong> with checkbox
                    toggling, filtering, and real-time status updates, applying
                    React hooks and RESTful API integration.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Built and continuously improved a personal{" "}
                    <strong>Developer Portfolio</strong> using React, React
                    Router, and Tailwind CSS, including a contact form with
                    Formspree integration and client-side success feedback
                    without page reloads.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Deployed web applications using{" "}
                    <strong>Render, Vercel, and Neon</strong>, while applying
                    version control and collaborative development practices with
                    Git and GitHub.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Contributed to the full-stack development, deployment,
                    business email integration, payment integration, and
                    technical coordination of the{" "}
                    <strong>Bollymoon e-commerce platform</strong>, supporting
                    the project from development through client handover.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Collaborating on frontend development for{" "}
                    <strong>Skills4Hire</strong>, a professional hiring and
                    networking platform, with a focus on responsive interfaces,
                    scalable user experiences, and modern web development
                    practices.
                  </span>
                </li>
              </ul>
            </div>

            {/* Graphics Design */}
            <div className="mb-12">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Graphics Designer
                  </h3>

                  <p className="text-lg font-medium text-blue-700 mt-1">
                    Creative & Visual Design
                  </p>
                </div>

                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  2020 – Present
                </span>
              </div>

              <p className="text-md text-gray-600 leading-relaxed mt-5 max-w-4xl">
                Designed intuitive and visually compelling graphics, including
                branding materials, logos, promotional designs, and digital
                assets, combining visual communication with an understanding of
                user experience and digital interfaces.
              </p>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="min-h-screen bg-gray-300 px-6 py-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b-4 border-orange-400 inline-block">
              Education
            </h2>
            <div className="mb-12">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Olabisi Onabanjo University
                </h3>
                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  Oct 2019 – Oct 2023
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-2">
                Bachelor of Arts
              </p>
              <p className="text-md text-gray-600 leading-relaxed">
                Linguistics
              </p>
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Mayflower High School, Ikenne, Ogun State
                </h3>
                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  Jan 2011 – Oct 2017
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen bg-gray-400 px-6 py-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            {/* Section heading */}
            <div className="mb-12 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 border-b-4 border-orange-500 inline-block">
                Skills
              </h2>

              <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                My technical foundation combines software engineering with
                linguistics and language technology. I build modern web
                applications while developing practical skills in computational
                linguistics, language data, annotation, text processing, and
                NLP-oriented workflows.
              </p>
            </div>

            {/* Skills Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Development */}
              <article className="group rounded-2xl bg-white border border-gray-200 p-7 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                    <FaCode className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Frontend Development
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Interfaces & user experiences
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "React Router",
                    "Tailwind CSS",
                    "Vite",
                    "Responsive UI Development",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-3 shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Backend & APIs */}
              <article className="group rounded-2xl bg-white border border-gray-200 p-7 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                    <LuDatabase className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Backend & APIs
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Server-side systems & data
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma ORM",
                    "REST APIs",
                    "JWT Authentication",
                    "CRUD Operations",
                    "API Integration",
                    "Database Management",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-3 shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Language Technology & Data */}
              <article className="group md:col-span-2 rounded-2xl bg-white border border-gray-200 p-7 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                    <MdPsychology className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Language Technology & Data
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Computational linguistics, language data & NLP workflows
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {[
                    "Computational Linguistics",
                    "Natural Language Processing",
                    "Data Annotation",
                    "Speech Annotation",
                    "Language Data Preparation",
                    "Text Processing",
                    "Benchmark Datasets",
                    "Data Adaptation",
                    "Label Studio",
                    "Praat",
                    "Python",
                    "R",
                    "SQL",
                    "Statistics",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-3 shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Tools & Workflow */}
              <article className="group md:col-span-2 rounded-2xl bg-white border border-gray-200 p-7 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                    <FaTools className="text-2xl text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Tools & Workflow
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Development, collaboration & delivery
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {[
                    "Git & GitHub",
                    "VS Code",
                    "Postman",
                    "Render",
                    "Vercel",
                    "Neon",
                    "API Design",
                    "Prompt Design",
                    "Data Ethics",
                    "Team Collaboration",
                    "Project Coordination",
                    "Problem Solving",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-3 shrink-0 group-hover:bg-blue-600 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <Projects />

        <section
          id="interests"
          className="min-h-screen bg-gray-100 px-6 py-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 inline-block">
              Interests
            </h2>
            <p className="text-md text-gray-700 leading-relaxed">
              Apart from being a developer, I enjoy playing my guitar during
              leisure time—exploring melodies and constantly improving my
              technique. I'm passionate about learning: from grasping new
              concepts to diving deep into research and expanding my knowledge
              across disciplines.
              <br />
              <br />I also find video games both creatively stimulating and
              mentally engaging. Traveling is another passion of mine—I’m
              fascinated by different cultures, languages, and perspectives.
              Exploring new places, meeting people from various backgrounds, and
              immersing myself in unique traditions broadens my worldview and
              enriches my personal growth.
            </p>
          </div>
        </section>

        <section
          id="certifications"
          className="min-h-screen bg-gray-200 px-6 py-16 md:px-10 lg:px-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 inline-block">
                Certifications
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
                A selection of academic, professional, and technical learning
                experiences that support my work across software development,
                linguistics, and language technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certificate 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <FaCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Full-Stack Software Engineering
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">
                      Charis Intelligence Academy
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Professional Software Engineering Training
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <GrCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Neurons, Brains, and Synapses
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">Coursera</p>

                    <p className="text-sm text-gray-500 mt-2">
                      Online Certification
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <FaCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Linguistics
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">
                      Olabisi Onabanjo University
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Bachelor of Arts — Linguistics
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <GrCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      JavaScript
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">Scrimba</p>

                    <p className="text-sm text-gray-500 mt-2">
                      JavaScript Development Course
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <FaCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Tailwind CSS
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">Scrimba</p>

                    <p className="text-sm text-gray-500 mt-2">
                      Tailwind CSS Development Course
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate 6 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <GrCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      TypeScript
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">Scrimba</p>

                    <p className="text-sm text-gray-500 mt-2">
                      TypeScript Development Course
                    </p>
                  </div>
                </div>
              </div>

              {/* Stanix Academy Certificate */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-100 p-3">
                    <FaCertificate className="text-blue-600 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Fullstack Engineer — Internship Program
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">
                      Stanix Academy
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      IT Project Management Cohort — April 2026
                    </p>

                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      Completed an internship program involving practical
                      collaboration with a project management team to contribute
                      to the delivery of a live product.
                    </p>

                    <span className="inline-block mt-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Role: Fullstack Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* GAFMEDIA — Certificate of Excellence */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-orange-100 p-3">
                    <FaCertificate className="text-orange-500 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Certificate of Excellence — Data Analysis
                    </h3>

                    <p className="text-orange-600 font-semibold mt-1">
                      GAFMEDIA
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Recognition for Achievement in Data Analysis
                    </p>

                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      Recognized for remarkable achievement and a demonstrated
                      commitment to learning and developing skills in Data
                      Analysis.
                    </p>

                    <span className="inline-block mt-3 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                      Certificate of Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate 9 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-orange-100 p-3">
                    <FaCertificate className="text-orange-500 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      Africa Computational Linguistics Summer School
                    </h3>

                    <p className="text-orange-600 font-semibold mt-1">
                      LINGUISTICS ISLAND
                    </p>

                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Certificate awarded for successfully completing the Africa
                      Computational Linguistics Summer School on August 15th,
                      2026.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Computational Linguistics",
                        "Language Data",
                        "Data Annotation",
                        "Speech Annotation",
                        "Python",
                        "R",
                        "Praat",
                        "Label Studio",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
