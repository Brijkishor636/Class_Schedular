import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import UserComponent from "../components/UserComponent";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`fixed md:static inset-y-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 w-64 bg-white shadow-md z-40 transition-transform duration-300`}
        >
          <nav className="flex-1 p-4 space-y-2">
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              📊 Dashboard
            </a>
            <Link to={"/mytimetable"} className="block p-2 rounded-lg hover:bg-gray-100">
              📅 My Timetables
            </Link>
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              🔄 Substitute Management
            </a>
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              📝 Leave Management
            </a>
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              👥 Users
            </a>
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              ⚙ Settings
            </a>
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <UserComponent/>
      </div>
      <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
          <Footer/>
      </div>
    </div>
  );
}
