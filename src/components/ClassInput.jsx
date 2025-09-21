import React, { useState } from "react";

function ClassInput({ onNext }) {
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "A",
      subjects: [
        { name: "ML", lecturesPerWeek: 3 },
        { name: "PP", lecturesPerWeek: 4 },
        { name: "CN", lecturesPerWeek: 2 },
      ],
    },
    {
      id: 2,
      className: "B",
      subjects: [
        { name: "PP", lecturesPerWeek: 4 },
        { name: "CD", lecturesPerWeek: 3 },
      ],
    },
    {
      id: 3,
      className: "C",
      subjects: [
        { name: "CD", lecturesPerWeek: 3 },
        { name: "MWC", lecturesPerWeek: 4 },
        { name: "CN", lecturesPerWeek: 2 },
      ],
    },
  ]);

  const handleClassChange = (index, event) => {
    const { name, value } = event.target;
    const newClasses = [...classes];
    newClasses[index][name] = value;
    setClasses(newClasses);
  };

  const handleSubjectChange = (classIndex, subjectIndex, event) => {
    const { name, value } = event.target;
    const newClasses = [...classes];
    newClasses[classIndex].subjects[subjectIndex][name] = value;
    setClasses(newClasses);
  };

  const handleAddClass = () => {
    setClasses([
      ...classes,
      { id: Date.now(), className: "", subjects: [{ name: "", lecturesPerWeek: 0 }] },
    ]);
  };

  const handleRemoveClass = (index) => {
    const newClasses = [...classes];
    newClasses.splice(index, 1);
    setClasses(newClasses);
  };

  const handleAddSubject = (index) => {
    const newClasses = [...classes];
    newClasses[index].subjects.push({ name: "", lecturesPerWeek: 0 });
    setClasses(newClasses);
  };

  const handleRemoveSubject = (classIndex, subjectIndex) => {
    const newClasses = [...classes];
    newClasses[classIndex].subjects.splice(subjectIndex, 1);
    setClasses(newClasses);
  };

  return (
    <div className="w-full bg-white min-h-screen px-4 sm:px-6 py-6 font-sans">
      <div className="w-full sm:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Input Class Data with Subjects
        </h2>

        {classes.map((classItem, classIndex) => (
          <div
            key={classItem.id}
            className="w-full bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6 border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Class {classItem.className || "Unnamed"}
              </h3>
              <button
                onClick={() => handleRemoveClass(classIndex)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md cursor-pointer w-full sm:w-auto"
              >
                Remove Class
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Class Name
              </label>
              <input
                type="text"
                name="className"
                placeholder="Class Name"
                value={classItem.className}
                onChange={(e) => handleClassChange(classIndex, e)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Subjects & Lectures per Week
              </label>
              {classItem.subjects.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  className="flex flex-col sm:flex-row gap-2 mb-3"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Subject Name"
                    value={subject.name}
                    onChange={(e) => handleSubjectChange(classIndex, subjectIndex, e)}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    name="lecturesPerWeek"
                    placeholder="Lectures"
                    value={subject.lecturesPerWeek}
                    onChange={(e) => handleSubjectChange(classIndex, subjectIndex, e)}
                    className="w-full sm:w-28 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <button
                    onClick={() => handleRemoveSubject(classIndex, subjectIndex)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm w-full sm:w-auto"
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddSubject(classIndex)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer w-full sm:w-auto"
              >
                Add Subject
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <button
            onClick={handleAddClass}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md cursor-pointer w-full sm:w-auto"
          >
            Add Class
          </button>
          <button
            onClick={() => onNext(classes)}
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md cursor-pointer w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassInput;
