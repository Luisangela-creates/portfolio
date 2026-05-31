import { ArrowDown, ExternalLink, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/avatar.jpg"
                alt={profile.name}
                width={64}
                height={64}
                className="rounded-full object-cover w-16 h-16 ring-2 ring-blue-100"
              />
              <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
                {profile.title}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 text-balance">
              {profile.name}
            </h1>

            <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-8 text-balance">
              {profile.tagline}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-500 mb-8">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                <Mail size={15} />
                Contact me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: `${profile.yearsExperience}+`, label: "Years in PM" },
              { value: profile.productsLaunched, label: "Products launched" },
              { value: profile.usersImpacted, label: "Users impacted" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="col-span-3 bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-slate-600 hover:text-gray-600 dark:hover:text-slate-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

