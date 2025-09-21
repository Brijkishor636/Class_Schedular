import { Link } from "react-router-dom";

export default function GenerateSection() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 items-center justify-center text-center min-h-screen px-4">

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Ready to Simplify Your <br />
        <span className="text-yellow-400">Scheduling Process?</span>
      </h1>

      
      <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
        Join thousands of institutions who have streamlined their scheduling
        with <span className="font-semibold">TimetableMaster</span>.
      </p>


      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link to={"/login"}>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium shadow-md hover:shadow-lg transition cursor-pointer">
              Generate Your Timetable →
            </button>
        </Link>
        <button className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-indigo-600 transition cursor-pointer">
          Schedule a Demo
        </button>
      </div>

     
      <div className="mt-12 flex flex-wrap gap-8 justify-center text-white">
        <div>
          <p className="text-2xl font-bold">4,000+</p>
          <p className="text-gray-300">Institutes</p>
        </div>
        <div>
          <p className="text-2xl font-bold">20k+</p>
          <p className="text-gray-300">Schedules</p>
        </div>
        <div>
          <p className="text-2xl font-bold">99.9%</p>
          <p className="text-gray-300">Uptime</p>
        </div>
        <div>
          <p className="text-2xl font-bold">24/7</p>
          <p className="text-gray-300">Support</p>
        </div>
      </div>
    </div>
  );
}
