"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white relative flex flex-col justify-between p-6 md:p-12">

      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-red-600 rounded-full -z-10 opacity-90 md:opacity-100" />
      <div className="absolute top-[10%] right-[20%] w-20 h-20 bg-red-950/80 rounded-full -z-10 hidden lg:block" />
      <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-red-900/20 rounded-full -z-10" />
      <div className="absolute inset-0 bg-red-600/5 blur-[40px] pointer-events-none -z-20" />

      {/* HEADER / NAVBAR */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto mb-6">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-red-600/20">
            A
          </div>
          <span className="text-2xl font-black tracking-tighter hidden sm:block">
            Alarki
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5 md:gap-10 text-sm font-semibold">
          <Link href="/" className="text-white border-b-2 border-red-600 pb-1">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
            Projects
          </Link>
        </nav>

        {/* CONTACT BUTTON */}
        <Link
          href="/contact"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-red-600/20"
        >
          Contact
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto py-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">

          <h3 className="text-2xl md:text-3xl font-medium text-gray-200">
            Hi, I'm <span className="text-white italic font-serif">Alarki</span>
          </h3>

          {/* MAIN TITLE */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              <span className="text-red-600 block">Junior</span>
              <span className="text-white block">Full-Stack Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-medium mt-3">
              Building Scalable Software Systems
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
            I build backend systems, APIs, and full-stack applications using
            FastAPI, Python, React, and PostgreSQL. I enjoy creating practical
            software solutions that solve real-world problems and improve user
            experiences.
          </p>

          {/* SOCIALS */}
          <div className="flex flex-col gap-3">

            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Find Me On
            </span>

            <div className="flex justify-center lg:justify-start gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/alarki-ndemugwedha-819242376/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 hover:text-red-600 transition-all"
              >
                <FaLinkedin size={22} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Alarki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 hover:text-red-600 transition-all"
              >
                <FaGithub size={22} />
              </a>

              {/* WhatsApp (FIXED ICON) */}
              <a
                href="https://wa.me/264812324970"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600/20 rounded-xl border border-green-500/40 hover:bg-green-600/30 transition-all text-green-400"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">

            <Link
              href="/contact"
              className="bg-red-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/10"
            >
              Hire Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="bg-neutral-900 border border-neutral-800 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all"
            >
              Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[280px] h-[380px] md:w-[350px] md:h-[480px] rounded-[60px] overflow-hidden border-4 border-[#070707] shadow-2xl relative z-10 bg-neutral-900">
            <img
              src="/me.jpg"
              alt="Alarki Profile"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 flex flex-col sm:flex-row justify-between items-center border-t border-neutral-900 pt-4 mt-6 text-xs text-gray-500 w-full max-w-7xl mx-auto gap-4">
        <p>© {new Date().getFullYear()} Alarki Ndemugwedha</p>

        <div className="flex items-center gap-2 bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Available for Opportunities</span>
        </div>
      </footer>

    </main>
  );
}