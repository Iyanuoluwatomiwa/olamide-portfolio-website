import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  const links = [
    "ABOUT",
    "EXPERIENCE",
    "EDUCATION",
    "SKILLS",
    "INTERESTS",
    "CERTIFICATIONS",
  ];

  return (
    <>
      <div className="md:hidden absolute top-4 left-4 z-30">
        <button
          className="text-white text-3xl bg-blue-600 p-2 rounded-md"
          onClick={toggleSidebar}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`bg-blue-500 w-64 h-screen p-4 fixed top-0 left-0 z-20 transition-transform duration-300 transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:block`}
      >
        <div className="flex justify-center mt-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-white"
          />
        </div>
        <nav className="mt-10">
          <ul className="text-center space-y-4">
            {links.map((label) => (
              <li key={label}>
                <Link
                  to={label.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)} // close on click
                  className="cursor-pointer text-lg font-bold text-[#F5F5DC] hover:text-[#FF4500] transition duration-500 ease-in-out"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
