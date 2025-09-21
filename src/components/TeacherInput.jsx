import React, { useState } from "react";

function TeacherInput({ onNext }) {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Alice", subjects: ["ML", "MWC"] },
    { id: 2, name: "Bob", subjects: ["CN"] },
    { id: 3, name: "Charlie", subjects: ["CD"] },
    { id: 4, name: "Diana", subjects: ["ML", "SC", "MWC"] },
  ]);

  const handleTeacherChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...teachers];
    list[index][name] = value;
    setTeachers(list);
  };

  const handleSubjectChange = (teacherIndex, subjectIndex, event) => {
    const { value } = event.target;
    const list = [...teachers];
    list[teacherIndex].subjects[subjectIndex] = value;
    setTeachers(list);
  };

  const handleAddTeacher = () => {
    setTeachers([...teachers, { id: Date.now(), name: "", subjects: [""] }]);
  };

  const handleRemoveTeacher = (index) => {
    const list = [...teachers];
    list.splice(index, 1);
    setTeachers(list);
  };

  const handleAddSubject = (index) => {
    const list = [...teachers];
    list[index].subjects = [...list[index].subjects, ""];
    setTeachers(list);
  };

  const handleRemoveSubject = (teacherIndex, subjectIndex) => {
    const list = [...teachers];
    list[teacherIndex].subjects.splice(subjectIndex, 1);
    setTeachers(list);
  };

  return (
    <div className="w-full bg-white min-h-screen px-4 sm:px-6 py-6 font-sans">
      <div className="w-full sm:max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Input Teacher Data with Subject Expertise
        </h2>

        {teachers.map((teacher, teacherIndex) => (
          <div
            key={teacher.id}
            className="w-full bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6 border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Teacher {teacherIndex + 1}
              </h3>
              <button
                onClick={() => handleRemoveTeacher(teacherIndex)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md cursor-pointer w-full sm:w-auto"
              >
                Remove Teacher
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Teacher Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Teacher Name"
                value={teacher.name}
                onChange={(e) => handleTeacherChange(teacherIndex, e)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Subjects
              </label>
              {teacher.subjects.map((subject, subjectIndex) => (
                <div
                  key={subjectIndex}
                  className="flex flex-col sm:flex-row gap-2 mb-3"
                >
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) =>
                      handleSubjectChange(teacherIndex, subjectIndex, e)
                    }
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <button
                    onClick={() =>
                      handleRemoveSubject(teacherIndex, subjectIndex)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm w-full sm:w-auto"
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddSubject(teacherIndex)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer w-full sm:w-auto"
              >
                Add Subject
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <button
            onClick={handleAddTeacher}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md cursor-pointer w-full sm:w-auto"
          >
            Add Teacher
          </button>
          <button
            onClick={() => onNext(teachers)}
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md cursor-pointer w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherInput;
