import { experience } from "@/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Where I've worked
        </h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-100 dark:bg-slate-700 hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-16 relative">
                <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 items-center justify-center">
                  <Briefcase size={16} className="text-blue-600" />
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-slate-400 block">
                        {job.period}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-slate-500">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
