import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Code2, Search } from "lucide-react";
import Nav from "@/components/Nav";
import { profile } from "@/lib/data";
import styles from "./page.module.css";

const title = `Development & SEO Consulting | ${profile.name}`;
const description = "Continue beyond launch with Luisangela Marcano. Explore monthly development and SEO support packages, request a subscription, or reach out for a consultation.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

const packages = [
  {
    number: "01",
    icon: Code2,
    title: "Development support",
    intro: "Keep your website moving forward.",
    description: "A development partner for the updates and improvements that come after your project launches.",
    items: ["A monthly plan with an agreed development scope", "Website updates, maintenance, and bug fixes", "Page improvements and scoped feature work", "A monthly review and next-step priorities"],
    takeaway: "For an existing website that needs regular attention and room to grow.",
    cta: "Request development subscription",
  },
  {
    number: "02",
    icon: Search,
    title: "SEO support",
    intro: "Give search consistent attention.",
    description: "An ongoing partnership to understand your search performance and plan focused improvements each month.",
    items: ["An initial search baseline and monthly priorities", "Technical SEO checks and recommendations", "Keyword research and on-page content guidance", "A monthly progress report and review"],
    takeaway: "For a business ready to make search visibility part of its ongoing work.",
    cta: "Request SEO subscription",
  },
];

const steps = [
  { title: "Choose your next step", text: "Request a package by email, or reach out for a consultation. Share your website and what you would like help with." },
  { title: "Agree on the details", text: "We confirm the monthly scope, price, and subscription terms before you commit. Your email starts that conversation." },
  { title: "Keep improving together", text: "Once your package is agreed, work follows the monthly priorities. Regular reviews keep the next steps connected to your goals." },
];

const faqs = [
  { question: "How do I subscribe to a package?", answer: "Choose a subscription request link to open a prefilled email for that package. We will confirm the scope, monthly price, and terms together. Sending a request does not activate a subscription or take a payment." },
  { question: "What is the monthly price?", answer: "Pricing is tailored to your site and the amount of support you need. You receive a monthly quote and a defined scope before deciding whether to subscribe." },
  { question: "Can I combine development and SEO?", answer: "Yes. Reach out with your priorities and we can scope a combined monthly package, including which development tasks and SEO work it covers." },
  { question: "Can I get help without a subscription?", answer: "Yes. Reach out for a consultation or a separately scoped project. An ongoing package is an optional next step for support beyond the initial project." },
  { question: "Can I change or cancel my package?", answer: "Your proposal will set out the cancellation notice and any minimum commitment before you subscribe. If your needs change, we can discuss adjusting the scope." },
  { question: "Do you guarantee search rankings?", answer: "No. Rankings are not something I can promise. An SEO engagement focuses on agreed improvements and a measurement plan so you can assess progress against your goals." },
];

function inquiry(subject: string) {
  const body = "Hi Luisangela,\n\nI would like to discuss a project.\n\nMy website (if available):\nWhat I would like help with:\nIdeal timeline:\nBudget range (if known):\n\nThanks,";
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function subscriptionRequest(packageName: string) {
  const subject = `Subscription request: ${packageName}`;
  const body = `Hi Luisangela,\n\nI am interested in the monthly ${packageName} package. Please send me a proposed scope, monthly price, and subscription terms.\n\nMy website:\nWhat I would like help with:\nPreferred start date:\nMonthly budget range (if known):\n\nThanks,`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ConsultPage() {
  return (
    <div className={styles.page}>
      <a href="#consult-content" className={styles.skipLink}>Skip to content</a>
      <Nav className={styles.nav} currentPage="/consult" />
      <main id="consult-content">
        <section className={`${styles.container} ${styles.hero}`} aria-labelledby="consult-title">
          <p className={styles.eyebrow}>Consulting & ongoing support / Development & SEO</p>
          <div className={styles.heroGrid}>
            <div>
              <h1 id="consult-title">Your project is<br /><span>just the beginning.</span></h1>
              <p className={styles.lead}>Keep improving after launch with ongoing development and SEO support. Choose a monthly package, or reach out to talk through your next step.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#packages">Explore monthly packages <ArrowDown size={18} aria-hidden="true" /></a>
                <a className={styles.textLink} href="#start">Reach out <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <aside className={styles.heroNote}>
              <p className={styles.eyebrow}>Beyond the handover</p>
              <p>A familiar partner for what comes next, from website improvements to a clearer search strategy.</p>
              <span>Ongoing support, scoped to your needs.</span>
            </aside>
          </div>
          <div className={styles.heroFoot}><span>With {profile.name}</span><span>Consultations & monthly packages</span></div>
        </section>

        <section id="packages" className={`${styles.container} ${styles.section}`} aria-labelledby="packages-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Monthly packages</p><h2 id="packages-title">Support beyond the project.</h2></div>
            <p>Choose your focus.<br />We agree on the details together.</p>
          </div>
          <div className={styles.services}>
            {packages.map((service) => (
              <article className={styles.service} key={service.number}>
                <div className={styles.serviceTop}><service.icon size={24} strokeWidth={1.5} aria-hidden="true" /><span>{service.number}</span></div>
                <h3>{service.title}</h3>
                <p className={styles.serviceIntro}>{service.intro}</p>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.packagePrice}><strong>Custom monthly pricing</strong><span>Based on your scope and support needs</span></div>
                <ul>{service.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
                <div className={styles.takeaway}><p className={styles.eyebrow}>A good fit</p><p>{service.takeaway}</p></div>
                <a className={styles.packageButton} href={subscriptionRequest(service.title)}>{service.cta} <ArrowUpRight size={16} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <p className={styles.packageNote}>Requests open your email app. Your scope, monthly price, and terms are confirmed before you subscribe.</p>
        </section>

        <section className={styles.processBand} aria-labelledby="process-title">
          <div className={`${styles.container} ${styles.section}`}>
            <p className={styles.eyebrow}>How to get started</p><h2 id="process-title">From a conversation to ongoing support.</h2>
            <ol className={styles.steps}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
            <Link className={styles.textLink} href="/#about">More about my background <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className={`${styles.container} ${styles.section} ${styles.faqGrid}`} aria-labelledby="faq-title">
          <div><p className={styles.eyebrow}>Before we begin</p><h2 id="faq-title">A few useful answers.</h2></div>
          <div className={styles.faqs}>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true" className={styles.plus}>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section id="start" className={`${styles.container} ${styles.contact}`} aria-labelledby="start-title">
          <div><p className={styles.eyebrow}>Let&apos;s talk</p><h2 id="start-title">Find the right next step.</h2><p>Need help choosing a package, want to combine development and SEO, or have a separate project in mind? Tell me what you need.</p></div>
          <div className={styles.contactAction}><a className={styles.primary} href={inquiry("Development & SEO consultation")}>Reach out for a consultation <ArrowUpRight size={18} aria-hidden="true" /></a><p>Opens your email app with a short project brief.</p><a className={styles.email} href={`mailto:${profile.email}`}>{profile.email}</a></div>
        </section>
      </main>
      <footer className={`${styles.container} ${styles.footer}`}><p>© {new Date().getFullYear()} {profile.name}</p><Link href="/">Back to portfolio <ArrowUpRight size={16} aria-hidden="true" /></Link></footer>
    </div>
  );
}
