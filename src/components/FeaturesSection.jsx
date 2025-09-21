// components/FeaturesSection.tsx
import { Zap, ShieldCheck, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-yellow-300" />,
      title: "Lightning Fast",
      desc: "Generate timetables in seconds with AI-powered optimization.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
      title: "Conflict-Free",
      desc: "Ensure schedules are validated with zero conflicts automatically.",
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      title: "AI Powered",
      desc: "Smart automation to optimize resources and save educators' time.",
    },
  ];

  return (
    <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white/10 rounded-2xl p-8 text-center hover:bg-white/20 transition"
        >
          <div className="flex justify-center mb-4">{f.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-200">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
