import { profile } from "@/lib/data";
import { Mail, ExternalLink, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Let's connect
        </h2>
        <p className="text-gray-500 dark:text-slate-400 mb-12 max-w-xl">
          Whether it's a new opportunity, a collaboration, or just a chat about product — I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ContactCard
              icon={<Mail size={18} className="text-blue-600" />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactCard
              icon={<ExternalLink size={18} className="text-blue-600" />}
              label="LinkedIn"
              value="linkedin.com/in/luisangela"
              href={profile.linkedin}
              external
            />
            <ContactCard
              icon={<MapPin size={18} className="text-blue-600" />}
              label="Location"
              value={profile.location}
              href={null}
            />
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Open to new opportunities</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                I'm currently exploring senior PM roles and advisory engagements. If you're building something meaningful and need an experienced product leader, let's talk.
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm self-start"
            >
              <Mail size={15} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 dark:text-slate-500">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {inner}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
      {children}
    </p>
  );
}
