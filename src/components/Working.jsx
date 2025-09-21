
export default function Working() {
  const steps = [
    {
      number: "1",
      title: "Easy Start",
      subtitle: "Enter Your Details",
      description:
        "Start by adding classes, subjects, teachers, and specific constraints. TimetableMaster's intuitive interface makes data entry simple and error-free.",
    },
    {
      number: "2",
      title: "Auto-Check",
      subtitle: "Thorough Verification",
      description:
        "Our platform automatically checks for missing or conflicting information to ensure accurate, consistent inputs before generating your timetable.",
    },
    {
      number: "3",
      title: "AI-Powered",
      subtitle: "Generate Optimal Timetable",
      description:
        "With one click, our AI-driven engine processes your data and creates a conflict-free, highly efficient schedule that meets your unique constraints.",
    },
    {
      number: "4",
      title: "Flexible",
      subtitle: "Adjust & Get Suggestions",
      description:
        "Need fine-tuning? Simply drag-and-drop to rearrange classes or teachers. Our system offers intelligent suggestions to maintain an optimal layout.",
    },
    {
      number: "5",
      title: "Smart Cover",
      subtitle: "Manage Staff Absences",
      description:
        "Handle unexpected absences effortlessly. Mark teachers as unavailable and our system automatically suggests qualified substitute teachers to maintain continuity.",
    },
    {
      number: "6",
      title: "Share",
      subtitle: "Download & Share",
      description:
        "Export or print your timetable in multiple formats, or share it online with staff and students. Invite teachers to join the platform for real-time updates and collaboration.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Follow these simple steps to generate your perfect, conflict-free schedule. TimetableMaster handles the heavy lifting, so you can focus on delivering great education.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-3xl cursor-pointer shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full text-lg font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
            <h4 className="text-indigo-600 font-medium mb-3">{step.subtitle}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
