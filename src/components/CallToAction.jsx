import { Link } from "react-router-dom";

// components/CallToAction.tsx
export default function CallToAction() {
  return (
    <section className="text-center px-6 py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-3xl max-w-6xl mx-auto my-16">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        Ready to Automate Your Timetable?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Join thousands of schools already saving time with our AI-powered
        scheduler.
      </p>
      <Link to={"/login"}>
      <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer">
        Get Started for Free
      </button>
      </Link>
    </section>
  );
}
