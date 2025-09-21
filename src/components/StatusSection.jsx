// components/StatsSection.tsx
export default function StatsSection() {
  const stats = [
    { label: "Institutes Worldwide", value: "4,000+" },
    { label: "Schedules", value: "20k+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="bg-white/10 py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-300">
            {s.value}
          </p>
          <p className="text-gray-200 mt-2">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
