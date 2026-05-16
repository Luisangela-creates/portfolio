import { education, certifications, profile } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My background
        </h2>
        <p className="text-gray-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed">
          {profile.bio}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.institution} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-100 dark:border-slate-700">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{e.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-slate-300 mt-0.5">{e.degree}</p>
                  {e.notes && <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{e.notes}</p>}
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">{e.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.name} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-100 dark:border-slate-700">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{c.name}</p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{c.issuer}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">{c.year}</p>
                </div>
              ))}
            </div>
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
