import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-slate-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Product Manager · {profile.location}</p>
      </div>
    </footer>
  );
}
