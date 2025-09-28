import { useState } from "react";
import { MoreVertical, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function MytimeComponent() {
  const [timetables, setTimetables] = useState([
    {
      id: 1,
      title: "Untitled",
      status: "Draft",
      created: "Sep 28, 2025",
      updated: "Sep 28, 2025",
    },
    {
      id: 2,
      title: "Untitled",
      status: "Draft",
      created: "Sep 21, 2025",
      updated: "Sep 21, 2025",
    },
  ]);

  const handlePublish = (id) => {
    setTimetables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: "Published", updated: new Date().toDateString() }
          : t
      )
    );
  };

  const handleUnpublish = (id) => {
    setTimetables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: "Draft", updated: new Date().toDateString() }
          : t
      )
    );
  };

  const published = timetables.filter((t) => t.status === "Published");
  const drafts = timetables.filter((t) => t.status === "Draft");

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <h1 className="text-2xl font-bold">My Timetables</h1>
          <p className="text-gray-500">
            Manage all your timetables and track their status
          </p>
        </div>
        <Link to={"/createtimetable"} className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
          + New Timetable
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 flex items-center gap-3 border rounded-lg bg-white shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-lg">📄</div>
          <div>
            <p className="text-sm text-gray-500">Total Timetables</p>
            <p className="text-xl font-semibold">{timetables.length}</p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-3 border rounded-lg bg-white shadow-sm">
          <div className="bg-green-100 p-3 rounded-lg">✅</div>
          <div>
            <p className="text-sm text-gray-500">Published</p>
            <p className="text-xl font-semibold">{published.length}</p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-3 border rounded-lg bg-white shadow-sm">
          <div className="bg-yellow-100 p-3 rounded-lg">✏️</div>
          <div>
            <p className="text-sm text-gray-500">Drafts</p>
            <p className="text-xl font-semibold">{drafts.length}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          ✅ Published Timetables{" "}
          <span className="text-sm text-gray-500">({published.length})</span>
        </h2>

        {published.length === 0 ? (
          <div className="mt-3 p-6 bg-green-50 text-center rounded-lg border border-green-200">
            <CheckCircle className="mx-auto text-green-500 mb-2" size={28} />
            <p className="font-medium text-green-700">No published timetables</p>
            <p className="text-sm text-green-600">
              Publish a timetable to start using the substitute management system.
            </p>
          </div>
        ) : (
          <div className="space-y-4 mt-3">
            {published.map((t) => (
              <div
                key={t.id}
                className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg bg-white shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-indigo-600">{t.title}</h3>
                  <p className="text-xs text-gray-500">
                    Updated: {t.updated} • Created: {t.created}
                  </p>
                  <span className="text-green-600 bg-green-100 px-2 py-1 text-xs rounded-full mt-1 inline-block">
                    {t.status}
                  </span>
                </div>
                <div className="flex gap-2 mt-3 md:mt-0">
                  <button
                    onClick={() => handleUnpublish(t.id)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg"
                  >
                    Unpublish
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-gray-500">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          ✏️ Draft Timetables{" "}
          <span className="text-sm text-gray-500">({drafts.length})</span>
        </h2>
        <div className="space-y-4 mt-3">
          {drafts.map((t) => (
            <div
              key={t.id}
              className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg bg-white shadow-sm"
            >
              <div>
                <h3 className="font-semibold text-indigo-600">{t.title}</h3>
                <p className="text-xs text-gray-500">
                  Updated: {t.updated} • Created: {t.created}
                </p>
                <span className="text-gray-600 bg-gray-100 px-2 py-1 text-xs rounded-full mt-1 inline-block">
                  {t.status}
                </span>
              </div>
              <div className="flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => handlePublish(t.id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
                >
                  Publish
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
                  Edit
                </button>
                <button className="px-3 py-1 text-gray-500">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
