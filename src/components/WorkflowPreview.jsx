// components/WorkflowPreview.tsx
import WorkflowStepper from "./WorkflowStepper";

export default function WorkflowPreview() {
  return (
    <section className="bg-white text-black rounded-3xl shadow-xl max-w-6xl mx-auto p-8 md:p-12 my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Try the Workflow
      </h2>
      <WorkflowStepper />
    </section>
  );
}
