import Navbar from "./Navbar";

export default function GuidePage() {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 min-h-screen text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">
          Getting Started Guide
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Follow these simple steps to generate your timetable using AI:
        </p>

        <ol className="space-y-6 text-left">
          <li className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/20 transition">
            <span className="font-bold text-yellow-300">Step 1:</span> Add
            subjects, classes, and teachers.
          </li>
          <li className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/20 transition">
            <span className="font-bold text-yellow-300">Step 2:</span> Configure
            constraints like class hours, room availability, and teacher limits.
          </li>
          <li className="bg-white/10 p-6 rounded-xl shadow hover:bg-white/20 transition">
            <span className="font-bold text-yellow-300">Step 3:</span> Generate
            your timetable instantly with AI-powered conflict resolution.
          </li>
        </ol>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}
