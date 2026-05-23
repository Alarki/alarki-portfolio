"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main
      className="min-h-screen flex justify-center p-6 relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="bg-[#0f172a]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-10 text-gray-200 shadow-2xl">

          {/* Profile */}
          <div className="flex justify-center">
            <img
              src="/me.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border border-gray-700"
            />
          </div>

          {/* Name */}
          <h1 className="text-center mt-6 text-3xl font-semibold text-white">
            <Typewriter
              words={[
                "Alarki Ndemugwedha",
                "Software Engineer",
                "IT & Systems Enthusiast"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </h1>

          {/* Subtitle */}
          <p className="text-center mt-3 text-gray-400 text-sm">
            Software Engineering Graduate | Java • Python • JavaScript • Linux
          </p>

          <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-6 rounded-full"></div>

          {/* ABOUT */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              About
            </h2>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              Software Engineering graduate focused on building practical systems,
              web applications, and IT support solutions using Java, Python, JavaScript,
              SQL, and Linux environments.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              Education
            </h2>

            <div className="mt-4 border border-gray-800 rounded-xl p-4">
              <h3 className="text-white text-sm font-medium">
                Diploma in Software Engineering (NQF Level 6)
              </h3>
              <p className="text-gray-400 text-sm">Botho University</p>
              <p className="text-gray-500 text-xs">2022 – 2024</p>
            </div>
          </section>

          {/* PROJECTS (CLICKABLE) */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              Projects
            </h2>

            <div className="mt-4 space-y-4">

              <a
                href="#"
                target="_blank"
                className="block border border-gray-800 rounded-xl p-4 hover:border-blue-500 transition hover:bg-gray-900/40"
              >
                <h3 className="text-white text-sm font-medium">
                  Real Estate Landing Page
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Responsive UI built with HTML, CSS, JavaScript.
                </p>
              </a>

              <a
                href="#"
                target="_blank"
                className="block border border-gray-800 rounded-xl p-4 hover:border-blue-500 transition hover:bg-gray-900/40"
              >
                <h3 className="text-white text-sm font-medium">
                  Kids Learning App
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  React Native app focused on UI and learning experience.
                </p>
              </a>

            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              Skills
            </h2>

            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              Java · Python · JavaScript · C# · C++ · HTML · CSS · SQL · Linux · Git
            </p>
          </section>

          {/* GITHUB SECTION (NEW) */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              GitHub
            </h2>

            <a
              href="https://github.com/dashboard/"
              target="_blank"
              className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View My GitHub
            </a>
          </section>

          {/* CV DOWNLOAD (NEW) */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              CV
            </h2>

            <a
              href="/cv.pdf"
              download
              className="inline-block mt-3 text-sm text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Download CV
            </a>
          </section>

          {/* CONTACT */}
          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-widest text-blue-400">
              Contact
            </h2>

            <p className="text-sm text-gray-300 mt-2">
              Email: <span className="text-white">ndemugwedhaalarki@gmail.com</span>
            </p>
            <p className="text-sm text-gray-300">
              Phone: <span className="text-white">+264812324970</span>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}