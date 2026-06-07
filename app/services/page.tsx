export default function Services() {
  return (
    <main className="min-h-screen bg-[#070707] text-white p-6 md:p-12">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-red-500">
          Services
        </h1>

        <p className="text-gray-400 mt-2">
          What I can build and deliver as a Software Engineer
        </p>

        {/* GRID SERVICES */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Backend */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              Backend Development
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Design and development of RESTful APIs using FastAPI and Python,
              including authentication systems, CRUD operations, and database integration.
            </p>
          </div>

          {/* Full Stack */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              Full-Stack Web Development
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Development of responsive and functional web applications using
              JavaScript, React, and backend API integration.
            </p>
          </div>

          {/* Mobile */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              Mobile Application Development
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Building cross-platform mobile applications with focus on UI design,
              functionality, and API integration.
            </p>
          </div>

          {/* Systems */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              Software Systems Development
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Development of robust software systems including business logic,
              data management, and system architecture.
            </p>
          </div>

          {/* Database */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              Database Design & Management
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Designing and managing SQL-based databases with structured data models
              and optimized queries.
            </p>
          </div>

          {/* API Integration */}
          <div className="p-5 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">
            <h2 className="text-xl font-semibold text-white">
              API Integration
            </h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
              Connecting frontend applications, mobile apps, and external systems
              to backend services.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}