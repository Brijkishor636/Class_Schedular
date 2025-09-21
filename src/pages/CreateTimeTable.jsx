import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WorkflowPreview from "../components/WorkflowPreview";
import { Link } from "react-router-dom";

export default function CreateTimeTable() {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-10 md:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
          Generate a Smarter <br />
          <span className="text-yellow-300">Timetable with TimeTableAI</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl md:max-w-2xl">
          Use AI-powered scheduling to save hours of manual planning and create 
          efficient timetables for your institute — accessible anytime, anywhere.
        </p>

        <div className="mt-6">
          <Link
            to="/userdashboard"
            className="inline-block bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition"
          >
            Go to Dashboard →
          </Link>
        </div>

        <div className="mt-10 w-full max-w-6xl px-2 sm:px-4">
          <WorkflowPreview />
        </div>
      </main>

      <Footer />
    </div>
  );
}
