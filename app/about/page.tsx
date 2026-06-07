export default function About() {
  return (
    <main className="min-h-screen bg-[#070707] text-white p-6 md:p-12">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-red-500">
          About Me
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 mt-2">
          Software Engineering Graduate
        </p>

        <p className="text-gray-500 text-sm">
          Botho University | 2022 – 2024
        </p>

        {/* INTRO (UPDATED) */}
        <p className="mt-6 text-gray-300 leading-relaxed">
          I’m a Junior Software Developer who enjoys building software that solves real problems.
          Most of my experience comes from working on backend systems, APIs, and full-stack applications.

          <br /><br />

          I like understanding how different parts of a system connect, from how data is stored,
          to how users interact with an application. I usually learn by building projects and improving
          them step by step rather than just focusing on theory.

          <br /><br />

          Right now, I’m focused on improving my backend development skills and building more complete,
          real-world applications that are reliable and practical to use.
        </p>

        {/* SKILLS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Skills</h2>

          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>C#</span>
            <span>C++</span>
            <span>HTML & CSS</span>
            <span>Git</span>
            <span>Linux</span>
          </div>
        </section>

        {/* CURRENT FOCUS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">
            Current Focus
          </h2>

          <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
            <li>FastAPI backend development</li>
            <li>RESTful API design</li>
            <li>PostgreSQL database systems</li>
            <li>Full-stack web and mobile application development</li>
            <li>Building robust real-world software systems</li>
          </ul>
        </section>

        {/* PROJECT NOTE */}
        <section className="mt-10 p-5 border border-gray-800 rounded-xl bg-[#0f0f0f]">
          <h2 className="text-xl font-semibold text-white">
            Currently Building
          </h2>

          <p className="mt-2 text-gray-300">
            🚗 Car Rental Management System (FastAPI + PostgreSQL) to strengthen my backend and API development skills.
          </p>
        </section>

      </div>

    </main>
  );
}