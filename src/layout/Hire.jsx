import React, { useState } from "react";
import { FaPhone, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "SUCCESS" or "ERROR"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mvgqpdyq", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    });

    if (res.ok) {
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800">
            Let's Work Together
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            I'm currently open to freelance work and exciting opportunities.
          </p>
        </div>

        <div className="flex justify-center gap-6 text-white mb-6">
          <a
            href="tel:+2349066681038"
            className="bg-gray-600 hover:bg-gray-700 p-3 rounded-full"
          >
            <FaPhone />
          </a>
          <a
            href="https://github.com/Iyanuoluwatomiwa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 p-3 rounded-full"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/odewenu-olamide-2118ba224/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/2349066681038"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-gray-700 text-center mb-8">
          Curious about how I work or the kind of projects I build? Explore my{" "}
          <a
            href="https://github.com/Iyanuoluwatomiwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            GitHub portfolio
          </a>{" "}
          to see examples of my code, design, and problem-solving skills.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="5"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-600 font-medium text-center mt-3">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-600 font-medium text-center mt-3">
              ❌ Oops! Something went wrong. Try again.
            </p>
          )}
        </form>

        <div className="text-right mt-6">
          <Link
            to="/"
            className="inline-block bg-gray-100 hover:bg-gray-200 text-blue-700 px-4 py-2 rounded-md shadow-sm font-medium transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hire;
