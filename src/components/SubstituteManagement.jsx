import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { Calendar } from "lucide-react";

export default function SubstituteManagement() {
  const [selectedDate, setSelectedDate] = useState("09/28/2025");

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Substitute Management</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage staff absences and substitutions efficiently
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full md:w-auto cursor-pointer">
          View Substitute Data
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="p-4 flex flex-col items-center justify-center text-center text-gray-500">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5V4H2v16h5m10 0V10M7 20v-6m4 6v-6"
              />
            </svg>
          </div>
          <p className="font-medium">No teachers available</p>
          <p className="text-sm">Publish a timetable to see teachers here</p>
        </Card>

        <Card className="lg:col-span-3 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Button variant="outline" size="icon">
                {"<"}
              </Button>
              <div className="flex items-center border rounded-lg px-3 py-1">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                <input
                  type="text"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-transparent outline-none text-sm md:text-base w-24"
                />
              </div>
              <Button variant="outline" size="icon">
                {">"}
              </Button>
            </div>

            <div className="flex gap-2 justify-center md:justify-end">
              <Button variant="outline" className="w-full md:w-auto">Today</Button>
              <Button variant="outline" className="w-full md:w-auto">Tomorrow</Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-500 py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.779.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-medium">Select a teacher</p>
            <p className="text-sm text-center">
              Choose a teacher from the list to view their schedule
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
