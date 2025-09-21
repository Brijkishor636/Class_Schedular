import { useState } from "react";
import WorkflowPreview from "../components/WorkflowPreview";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const quickActions = [
    {
      title: "➕ New Timetable",
      description: "Create an automated timetable using AI scheduling.",
      bg: "bg-indigo-600",
      link: "/createtimetable",
    },
    {
      title: "📑 My Timetables",
      description: "View, edit, and publish your saved timetables.",
      bg: "bg-gray-800",
    },
    {
      title: "🔄 Substitutions",
      description: "Manage substitute teachers and schedules.",
      bg: "bg-orange-600",
    },
    {
      title: "📝 Leave Management",
      description: "Track and approve leave requests.",
      bg: "bg-purple-600",
    },
    {
      title: "👥 Manage Team",
      description:
        "Add, edit, and manage your organization members. Control user roles and permissions.",
      bg: "bg-green-600",
    },
    {
      title: "📅 View Schedule",
      description:
        "View live daily schedules with real-time substitutions and changes. See actual teaching assignments for all classes and teachers.",
      bg: "bg-teal-600",
    },
  ];

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
            <a className="block p-2 rounded-lg hover:bg-gray-100" href="#">
              📅 My Timetables
            </a>
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

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <h1 className="text-xl md:text-3xl font-bold">
              Good afternoon, <span className="text-indigo-600">John</span>
            </h1>
            <p className="text-gray-600">Welcome back to your dashboard.</p>

            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-blue-800">
                    Complete Your Institute Profile
                  </h3>
                  <p className="text-sm text-blue-600">
                    Fill institute details to generate more accurate timetables.
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
                  Complete Profile →
                </button>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold mt-10 mb-4">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quickActions.map((action) => {
                const content = (
                  <div
                    className={`${action.bg} text-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col h-full`}
                  >
                    <h3 className="text-lg font-bold">{action.title}</h3>
                    <p className="text-sm mt-2">{action.description}</p>
                  </div>
                );

                return action.link ? (
                  <Link to={action.link} key={action.title}>
                    {content}
                  </Link>
                ) : (
                  <div key={action.title}>{content}</div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
      <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
          <Footer/>
      </div>
    </div>
  );
}
