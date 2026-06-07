export default function Projects() {
  return (
    <main className="min-h-screen bg-[#070707] text-white p-6 md:p-12">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-red-500">
          Projects
        </h1>

        <p className="text-gray-400 mt-2">
          A collection of systems I’ve built while learning and improving my software engineering skills.
        </p>

        {/* PROJECT 1 */}
        <section className="mt-10 p-6 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">

          <h2 className="text-xl font-semibold text-white">
            🚗 Car Rental Management System (FastAPI + PostgreSQL) — In Progress
          </h2>

          <p className="mt-3 text-gray-300 leading-relaxed">
            A backend-focused system designed to manage vehicle rentals, bookings, and availability.
            The goal is to build a real-world API that handles core business logic such as renting,
            returning, and tracking vehicles.
          </p>

          <p className="mt-3 text-gray-300">
            I’m currently building the REST API using FastAPI and designing a structured PostgreSQL database
            to support scalable data management.
          </p>

          <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
            <li>RESTful API design using FastAPI</li>
            <li>Vehicle and booking management system</li>
            <li>PostgreSQL database integration</li>
            <li>Authentication and business logic (in progress)</li>
          </ul>
        </section>

        {/* PROJECT 2 */}
        <section className="mt-10 p-6 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">

          <h2 className="text-xl font-semibold text-white">
            🏡 Real Estate Management System
          </h2>

          <p className="mt-3 text-gray-300 leading-relaxed">
            A full-stack application with two interfaces: an admin dashboard and a customer-facing platform.
            It allows property listings to be managed and displayed in a structured way.
          </p>

          <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
            <li>Admin dashboard for property CRUD operations</li>
            <li>Customer property browsing interface</li>
            <li>Responsive UI design</li>
            <li>Database-driven architecture</li>
          </ul>
        </section>

        {/* PROJECT 3 */}
        <section className="mt-10 p-6 border border-gray-800 rounded-xl bg-[#0f0f0f] hover:border-red-500 transition">

          <h2 className="text-xl font-semibold text-white">
            📱 Mobile Learning App (React Native)
          </h2>

          <p className="mt-3 text-gray-300 leading-relaxed">
            A simple mobile learning application focused on interactive UI screens and user engagement.
            Built to explore mobile development fundamentals and cross-platform design.
          </p>

          <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
            <li>Mobile UI development</li>
            <li>Interactive learning screens</li>
            <li>Cross-platform React Native structure</li>
          </ul>
        </section>

      </div>

    </main>
  );
}