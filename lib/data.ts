export const profile = {
  name: "Luisangela Marcano",
  title: "Product Manager",
  tagline: "Turning user insights, storytelling, and cross-functional alignment into products and experiences that make a real difference.",
  email: "luisangela@example.com",
  linkedin: "https://linkedin.com/in/luisangela",
  location: "Your City, State", // TODO: update with your location
  bio: "Creative Digital Strategist and Learning Experience Designer transitioning into Product Management. I bring a unique blend of storytelling, user-centered design, and educational design thinking to product work — helping teams build meaningful, impactful experiences that teach, inspire, and connect.",
  yearsExperience: 5,
  productsLaunched: 10, // TODO: update with your real numbers
  usersImpacted: "50K+", // TODO: update with your real numbers
};

export const experience = [
  {
    company: "Acme Corp",
    logo: null,
    role: "Senior Product Manager",
    period: "2022 – Present",
    location: "San Francisco, CA",
    description:
      "Led a cross-functional team of 15 to ship a new self-serve onboarding flow that reduced time-to-value from 14 days to 3 days and increased 30-day retention by 22%.",
    highlights: [
      "Owned the 0→1 launch of Acme's enterprise tier, generating $1.2M ARR in first year",
      "Ran 40+ customer discovery interviews to define a 3-year product vision",
      "Partnered with design and data to build a north-star metric framework adopted org-wide",
    ],
    tags: ["B2B SaaS", "Enterprise", "Growth"],
  },
  {
    company: "Startup Studio",
    logo: null,
    role: "Product Manager",
    period: "2020 – 2022",
    location: "Remote",
    description:
      "Drove roadmap prioritization and feature delivery for a two-sided marketplace with 500K+ monthly active users.",
    highlights: [
      "Launched a real-time chat feature that lifted seller conversion by 18%",
      "Reduced average bug-to-fix cycle from 12 days to 4 days by introducing weekly triage rituals",
      "Established quarterly OKR process across three product squads",
    ],
    tags: ["Marketplace", "Consumer", "Mobile"],
  },
  {
    company: "Agency Inc",
    logo: null,
    role: "Associate Product Manager",
    period: "2019 – 2020",
    location: "New York, NY",
    description:
      "Supported delivery of digital transformation projects for Fortune 500 clients across fintech and healthcare verticals.",
    highlights: [
      "Coordinated sprint planning and backlog grooming for a team of 8 engineers",
      "Wrote PRDs and acceptance criteria for 20+ features delivered on time",
      "Shadowed and interviewed 30+ end users to inform UX decisions",
    ],
    tags: ["Consulting", "Fintech", "Healthcare"],
  },
];

export const caseStudies = [
  {
    slug: "onboarding-redesign",
    title: "Onboarding Redesign: 14 Days → 3 Days to Value",
    company: "Acme Corp",
    period: "2023",
    summary:
      "How I led a cross-functional redesign of the new-user onboarding flow that cut time-to-value by 79% and lifted 30-day retention by 22 percentage points.",
    tags: ["Retention", "Onboarding", "B2B"],
    impact: [
      { metric: "Time-to-Value", before: "14 days", after: "3 days", delta: "-79%" },
      { metric: "30-Day Retention", before: "41%", after: "63%", delta: "+22pp" },
      { metric: "Support Tickets (Week 1)", before: "480/mo", after: "210/mo", delta: "-56%" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "New users were churning before reaching the core 'aha moment' of the product. Exit surveys pointed to a confusing setup flow and unclear value proposition in the first session.",
      },
      {
        heading: "Discovery",
        body: "I ran 20 usability sessions, analyzed Mixpanel funnels, and mapped the full onboarding journey. The drop-off concentrated at two steps: workspace configuration and first-team invite.",
      },
      {
        heading: "Solution",
        body: "Collaborated with design to prototype a guided setup wizard with contextual tooltips and an optional 'quick start' path. Introduced a progress bar and immediate value hooks (sample data, templates).",
      },
      {
        heading: "Results",
        body: "Shipped in 6 weeks. 30-day retention jumped from 41% to 63%. Time-to-value dropped from 14 days to 3 days. The framework became a template for subsequent product launches.",
      },
    ],
  },
  {
    slug: "enterprise-tier-launch",
    title: "0→1: Launching the Enterprise Tier",
    company: "Acme Corp",
    period: "2022",
    summary:
      "Building and launching a net-new enterprise product from first customer conversations to $1.2M ARR in 12 months.",
    tags: ["0→1", "Enterprise", "Revenue"],
    impact: [
      { metric: "ARR (Year 1)", before: "$0", after: "$1.2M", delta: "New stream" },
      { metric: "Enterprise Customers", before: "0", after: "34", delta: "+34" },
      { metric: "NPS (Enterprise)", before: "N/A", after: "62", delta: "Baseline" },
    ],
    sections: [
      {
        heading: "The Opportunity",
        body: "Sales was losing deals to enterprise-only competitors due to missing features: SSO, audit logs, and admin controls. A targeted enterprise SKU could unlock an adjacent buyer persona.",
      },
      {
        heading: "Discovery & Validation",
        body: "I interviewed 15 enterprise prospects, surveyed churned users, and partnered with Sales on 10 deal reviews. Distilled findings into a clear MLP (minimum loveable product) scope.",
      },
      {
        heading: "Execution",
        body: "Led a 3-engineer squad through 4 sprints to ship SSO, role-based permissions, audit logs, and a dedicated admin dashboard. Coordinated legal, marketing, and CS for launch.",
      },
      {
        heading: "Results",
        body: "Closed 34 enterprise accounts in the first year, generating $1.2M ARR. The enterprise NPS of 62 outpaced the SMB segment. Roadmap now 40% driven by enterprise feedback.",
      },
    ],
  },
  {
    slug: "marketplace-chat",
    title: "Real-Time Chat: +18% Seller Conversion",
    company: "Startup Studio",
    period: "2021",
    summary:
      "Shipping a real-time messaging feature to a two-sided marketplace that improved seller conversion and reduced buyer drop-off.",
    tags: ["Marketplace", "Growth", "Feature Launch"],
    impact: [
      { metric: "Seller Conversion", before: "23%", after: "41%", delta: "+18pp" },
      { metric: "Avg. Response Time", before: "8 hrs", after: "12 min", delta: "-97%" },
      { metric: "Buyer Drop-off (Pre-purchase)", before: "64%", after: "48%", delta: "-16pp" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Buyers were leaving the platform to contact sellers via email or WhatsApp, causing lost attribution and abandoned transactions.",
      },
      {
        heading: "Discovery",
        body: "Session recordings and exit surveys showed 60% of high-intent buyers wanted to ask product questions before purchasing. Sellers confirmed they were closing deals off-platform.",
      },
      {
        heading: "Solution",
        body: "Scoped a lightweight in-app messaging feature with push notifications, read receipts, and seller response-time badges. Designed to be shipped in a 4-week sprint.",
      },
      {
        heading: "Results",
        body: "Seller conversion lifted 18pp. Average response time dropped from 8 hours to 12 minutes. The feature became the #1 driver of 5-star buyer reviews.",
      },
    ],
  },
];

export const skills = [
  {
    category: "Product Strategy",
    items: ["Product Vision & Roadmapping", "OKRs & Goal Setting", "Market & Competitive Research", "0→1 Product Development", "Prioritization Frameworks (RICE, ICE, MoSCoW)"],
  },
  {
    category: "Discovery & Research",
    items: ["User Interviews", "Usability Testing", "Jobs-to-be-Done", "Survey Design", "Persona Development"],
  },
  {
    category: "Delivery & Execution",
    items: ["Agile / Scrum", "Sprint Planning & Backlog Grooming", "PRD Writing", "Cross-functional Leadership", "Stakeholder Management"],
  },
  {
    category: "Data & Analytics",
    items: ["Mixpanel", "Amplitude", "SQL (intermediate)", "A/B Testing", "Funnel Analysis"],
  },
  {
    category: "Design Collaboration",
    items: ["Figma", "Design Sprints", "Wireframing", "Prototyping", "Accessibility (WCAG)"],
  },
  {
    category: "Tools",
    items: ["Jira", "Linear", "Notion", "Confluence", "Miro", "Productboard"],
  },
];

export const education = [
  {
    institution: "University of California, Berkeley",
    degree: "B.S. in Business Administration",
    period: "2015 – 2019",
    notes: "Concentration in Technology Management",
  },
];

export const certifications = [
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", year: "2021" },
  { name: "Google Analytics Certification", issuer: "Google", year: "2020" },
];
