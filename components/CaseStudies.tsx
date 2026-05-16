import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Case Studies</SectionLabel>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          How I think and deliver
        </h2>
        <p className="text-gray-500 dark:text-slate-400 mb-12 max-w-xl">
          A few deep-dives into problems I've owned — from discovery to shipped outcome.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={16} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {cs.company} · {cs.period}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cs.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                {cs.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {cs.impact.slice(0, 3).map((imp) => (
                  <div key={imp.metric} className="bg-blue-50 dark:bg-blue-950 rounded-lg p-2 text-center">
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300">{imp.delta}</p>
                    <p className="text-[10px] text-blue-500 dark:text-blue-400 leading-tight mt-0.5">
                      {imp.metric}
                    </p>
                  </div>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                Read case study <ArrowRight size={14} />
              </span>
            </Link>
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
