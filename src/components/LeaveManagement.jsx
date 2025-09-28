import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { Calendar, BarChart, Sun, Moon } from "lucide-react";

export default function LeaveManagement() {
  const [selectedUser, setSelectedUser] = useState("John");

  const users = [
    { id: 1, name: "John", email: "john7456@gmail.com", color: "bg-purple-500" },
    { id: 2, name: "B", email: "b@example.com", color: "bg-purple-400" },
    { id: 3, name: "B", email: "b2@example.com", color: "bg-purple-400" },
    { id: 4, name: "A", email: "a@example.com", color: "bg-green-500" },
    { id: 5, name: "A", email: "a2@example.com", color: "bg-green-500" },
  ];

  const tabs = ["All Leaves", "Today", "Upcoming", "Past"];
  const [activeTab, setActiveTab] = useState("All Leaves");

  return (
    <div className="p-4 md:p-6 space-y-6">
      
      <div>
        <h1 className="text-xl md:text-2xl font-bold">Leave Management</h1>
        <p className="text-sm md:text-base text-gray-500">
          Comprehensive leave tracking and approval system for all users
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium flex items-center gap-2 text-sm md:text-base">
              <span className="text-gray-700">Users</span>
              <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">
                {users.length}
              </span>
            </h2>
          </div>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user.name)}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                  selectedUser === user.name
                    ? "bg-indigo-50 border border-indigo-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`${user.color} text-white font-bold rounded-full w-10 h-10 flex items-center justify-center`}
                >
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                {selectedUser === user.name && (
                  <span className="text-indigo-600 text-lg">✔</span>
                )}
              </div>
            ))}
          </div>
        </Card>

        <div className="lg:col-span-3 space-y-4">
          <Card className="p-4 md:p-6 bg-indigo-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-lg md:text-xl font-bold">{selectedUser}</h2>
                <p className="text-xs md:text-sm text-gray-600">user@email.com</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto cursor-pointer">
                + Add Leave
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <Card className="p-3 flex flex-col items-center text-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 mb-2" />
                <p className="font-bold text-base md:text-lg">0</p>
                <p className="text-xs text-gray-500">Total Leaves</p>
              </Card>
              <Card className="p-3 flex flex-col items-center text-center">
                <BarChart className="w-5 h-5 md:w-6 md:h-6 text-green-500 mb-2" />
                <p className="font-bold text-base md:text-lg">0</p>
                <p className="text-xs text-gray-500">Total Days</p>
              </Card>
              <Card className="p-3 flex flex-col items-center text-center">
                <Sun className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mb-2" />
                <p className="font-bold text-base md:text-lg">0</p>
                <p className="text-xs text-gray-500">Full Days</p>
              </Card>
              <Card className="p-3 flex flex-col items-center text-center">
                <Moon className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mb-2" />
                <p className="font-bold text-base md:text-lg">0</p>
                <p className="text-xs text-gray-500">Half Days</p>
              </Card>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-4 overflow-x-auto border-b pb-2 text-sm md:text-base">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-b-2 border-green-500 text-green-600 font-medium"
                      : "text-gray-500 hover:text-gray-700 cursor-pointer"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center text-gray-500 py-12">
              <Calendar className="w-10 h-10 md:w-12 md:h-12 mb-2 text-gray-400" />
              <p className="text-sm md:text-base">No leave records found</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
