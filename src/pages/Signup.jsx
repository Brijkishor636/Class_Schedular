import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
    console.log("Name:", name, "Email:", email, "Password:", password, "Phone:", phone);
  };

  const handleGoogleSignup = () => {
    console.log("Signup with Google");
  };

  const handleGithubSignup = () => {
    console.log("Signup with GitHub");
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-700 to-fuchsia-700 text-white items-center justify-center p-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold mb-6">
              Start Your Journey with <br /> TimetableAI
            </h1>
            <p className="text-lg mb-6">
              Join 40,000+ schools worldwide who trust TimetableMaster for their scheduling needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Free Forever Plan — No credit card required</li>
              <li>Intelligent scheduling algorithms</li>
              <li>Automatic conflict resolution</li>
              <li>Access from anywhere, anytime</li>
              <li>40,000+ Schools</li>
              <li>200k+ Schedules</li>
              <li>99.9% Uptime</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-8">
              Sign Up
            </h2>
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="relative">
                <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div className="relative">
                <BsTelephone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 cursor-pointer text-white py-3 rounded-full hover:bg-indigo-700 transition font-medium shadow-md hover:shadow-lg"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center text-gray-500">
              <p>Or continue with</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={handleGoogleSignup}
                  className="flex items-center gap-2 border rounded-full px-4 py-2 hover:shadow-md transition cursor-pointer"
                >
                  <FcGoogle size={24} />
                  Google
                </button>
                <button
                  onClick={handleGithubSignup}
                  className="flex items-center gap-2 border rounded-full px-4 py-2 hover:shadow-md transition cursor-pointer"
                >
                  <FaGithub size={24} />
                  GitHub
                </button>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
        <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
            <Footer/>
        </div>
    </div>
  );
}
