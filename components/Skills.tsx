import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          What I bring to the table
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-6"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
      {children}
    </p>
  );
}
