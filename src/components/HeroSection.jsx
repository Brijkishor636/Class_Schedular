import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="text-center px-6 py-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Effortless Timetables. <br />
        <span className="text-yellow-300">Powered by AI.</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
        Our intelligent timetable generator uses AI to create perfect,
        conflict-free school schedules in minutes. Automate tasks, save hours,
        and optimize your school’s resources.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link to={"/userdashboard"} className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition cursor-pointer">
          Generate Free Timetable
        </Link>
        <Link to="/guide">
          <button className="bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition cursor-pointer">
            View Guide
          </button>
        </Link>
      </div>
    </section>
  );
}
