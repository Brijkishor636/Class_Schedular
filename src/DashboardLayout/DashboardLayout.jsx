import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
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
            <Link
              to="/userdashboard"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              📊 Dashboard
            </Link>
            <Link to={"/createtimetable"}
                className="block p-2 rounded-lg hover:bg-gray-100"
            >➕ New Timetable</Link>
            <Link
              to="/userdashboard/mytimetable"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              📅 My Timetables
            </Link>
            <Link
              to="/userdashboard/substitutions"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              🔄 Substitute Management
            </Link>
            <Link
              to="/userdashboard/leave"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              📝 Leave Management
            </Link>
            <Link
              to="/userdashboard/users"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              👥 Users
            </Link>
            <Link to={"/userdashboard/schedule"}
                className="block p-2 rounded-lg hover:bg-gray-100"
            >📅 View Schedule</Link>
            <Link
              to="/userdashboard/#"
              className="block p-2 rounded-lg hover:bg-gray-100"
            >
              ⚙ Settings
            </Link>
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>

      <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
        <Footer />
      </div>
    </div>
  );
}
