export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <ul className="space-y-4 max-w-2xl mx-auto text-center">
        <li className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">AI-powered Cyclone Prediction</li>
        <li className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">Smart Maintenance Request System (SAP BTP)</li>
        <li className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">DevOps CI/CD Pipeline Automation</li>
        <li className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">AI Orchestrator – Automating tasks and empowering smart AI agents</li>
      </ul>
    </section>
  );
}