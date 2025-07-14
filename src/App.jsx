import React from "react";
import Sidebar from "./layout/Sidebar";
import { LuDatabase } from "react-icons/lu";
import { FaCode, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCertificate } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

function App() {
  return (
    <div className="flex w-full min-h-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 font-sans">
        <section
          id="about"
          className="h-screen w-full flex items-center bg-gradient-to-r from-blue-200 to-blue-300 overflow-hidden"
        >
          <div className="w-full px-4 md:pl-72">
            <div className="max-w-2xl z-10 text-center">
              <p className="text-lg text-gray-700 mb-2">Hello, my name is</p>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                Odewenu Olamide
              </h1>
              <p className="text-md text-gray-800 leading-relaxed mb-6">
                I'm a passionate{" "}
                <span className="font-semibold">Full-Stack Developer</span> with
                a knack for crafting modern, responsive, and user-focused web
                applications. I specialize in both frontend and backend
                development — using technologies like React, Node.js, and
                PostgreSQL. I also enjoy exploring the intersection of
                technology with creativity, accessibility, and human-centered
                design.
              </p>
              <Link
                to="/hire"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300 font-medium"
              >
                Hire Me
              </Link>
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
            <div className="mb-12">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  WEB DEVELOPER
                </h3>
                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  January 2025 - Present
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-2">
                Intelitec Solutions
              </p>
              <p className="text-md text-gray-600 leading-relaxed mt-2">
                As a Full-Stack Developer, I specialize in designing and
                developing responsive, user-friendly web applications with a
                strong focus on accessibility and performance. I bridge UI/UX
                and server logic with database management to enhance human
                communication.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  GRAPHICS DESIGNER
                </h3>
                <span className="text-orange-500 text-sm font-medium mt-2 md:mt-0">
                  January 2020 - Present
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-2">
                Intelitec Solutions
              </p>
              <p className="text-md text-gray-600 leading-relaxed mt-2">
                I design intuitive and visually compelling graphics — including
                logos, UI elements, and promotional materials — that enhance
                brand identity and user interaction.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-orange-500 inline-block">
              Skills
            </h2>
            <p className="text-md text-gray-700 mb-10 leading-relaxed max-w-3xl">
              From building intuitive UIs to managing data and APIs on the
              server, these are the technologies and abilities I’ve honed as a
              Full-Stack Developer. I’m always evolving and learning to stay
              current with the tech landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="rounded-xl bg-white p-6 shadow-xl flex flex-col items-center text-center">
                <FaCode className="text-4xl text-blue-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2 text-left w-full">
                  {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                    (item) => (
                      <li key={item} className="flex items-start text-gray-700">
                        <svg
                          className="h-5 w-5 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-xl flex flex-col items-center text-center">
                <LuDatabase className="text-4xl text-blue-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Backend
                </h3>
                <ul className="space-y-2 text-left w-full">
                  {[
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma ORM",
                    "REST APIs",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <svg
                        className="h-5 w-5 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-xl flex flex-col items-center text-center">
                <FaTools className="text-4xl text-blue-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Tools & Others
                </h3>
                <ul className="space-y-2 text-left w-full">
                  {[
                    "Git & GitHub",
                    "VS Code",
                    "Postman",
                    "Team Collaboration",
                    "Problem Solving",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <svg
                        className="h-5 w-5 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

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
          className="min-h-screen bg-gray-200 px-6 py-16 w-full"
        >
          <div className="w-full px-4 md:pl-72 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 inline-block">
              Certifications
            </h2>
            <ul className="list-none text-md text-gray-700 space-y-4 leading-relaxed">
              <li className="flex items-center gap-3">
                <FaCertificate className="text-blue-600 text-lg" />
                <span>Linguistics – OOU Certification</span>
              </li>
              <li className="flex items-center gap-3">
                <GrCertificate className="text-blue-600 text-lg" />
                <span>
                  Neurons, Brains, and Synapse – Coursera Online Certification
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
