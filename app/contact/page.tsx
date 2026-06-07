export default function Contact() {
  return (
    <main className="min-h-screen bg-[#070707] text-white p-6 md:p-12">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-red-500">
          Contact
        </h1>

        <p className="text-gray-400 mt-2">
          Let’s connect and build something meaningful
        </p>

        {/* CONTACT DETAILS */}
        <div className="mt-10 space-y-4 text-gray-300">

          <p>
            <span className="text-white font-semibold">Email:</span>{" "}
            <a
              href="mailto:ndemugwedhaalarki@gmail.com"
              className="text-red-400 hover:text-red-300"
            >
              ndemugwedhaalarki@gmail.com
            </a>
          </p>

          <p>
            <span className="text-white font-semibold">Phone:</span>{" "}
            +264 81 232 4970
          </p>

          <p>
            <span className="text-white font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/Alarki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300"
            >
              github.com/Alarki
            </a>
          </p>

          <p>
            <span className="text-white font-semibold">Location:</span>{" "}
            Namibia
          </p>

        </div>

        {/* AVAILABLE ROLES */}
        <div className="mt-12 p-6 border border-gray-800 rounded-xl bg-[#0f0f0f]">

          <h2 className="text-xl font-semibold text-white">
            Available For
          </h2>

          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>Junior Software Developer Roles</li>
            <li>Backend Developer Roles</li>
            <li>Full-Stack Developer Roles</li>
            <li>Mobile Application Development Roles</li>
            <li>Graduate Programmes</li>
            <li>Internship Opportunities</li>
          </ul>

        </div>

        {/* FOOT NOTE */}
        <p className="mt-10 text-gray-400 text-sm leading-relaxed">
          Feel free to reach out for opportunities, collaborations, or technical discussions.
          I respond quickly and am always open to learning and building impactful systems.
        </p>

      </div>

    </main>
  );
}