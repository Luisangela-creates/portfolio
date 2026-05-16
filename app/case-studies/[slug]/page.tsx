import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <Nav />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to case studies
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {cs.company} · {cs.period}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            {cs.title}
          </h1>

          <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-6">
            {cs.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-6 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-4">
              Impact at a glance
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {cs.impact.map((imp) => (
                <div
                  key={imp.metric}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {imp.delta}
                  </p>
                  <p className="text-xs font-medium text-gray-700 dark:text-slate-300 mb-2">
                    {imp.metric}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-slate-500">
                    {imp.before} → {imp.after}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {cs.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-gray-100 dark:border-slate-800 pt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Want to talk through this work?
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                I'm happy to share more context or dig deeper.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shrink-0"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
