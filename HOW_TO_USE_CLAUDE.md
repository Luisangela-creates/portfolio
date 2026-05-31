# How to Update Your Portfolio with Claude

## What Claude can do for you
- Update your bio, skills, job history, and case studies
- Add new sections or pages
- Fix bugs and styling issues
- All changes are pushed to GitHub → Netlify auto-deploys within ~2 minutes

---

## How to start a session

1. Go to **claude.ai/code**
2. Connect to your **Luisangela-creates/portfolio** GitHub repository
3. Tell Claude what you want to change in plain English

---

## Updating your content

All content lives in one file: **`lib/data.ts`**

Just tell Claude what to update, for example:

> "Update my location to Miami, FL"

> "Change my years of experience to 7"

> "Add a new skill called 'Agile Facilitation' under Product Strategy"

> "Update the thesweet.ai case study results section with: [paste your text]"

> "Add a new job: Company name, my role, dates, and description"

---

## Adding a new case study

Tell Claude:
> "Add a new case study called [title] for [company]. Here's the summary: [text]. The results were: [text]."

Claude will add it to `lib/data.ts` and it will automatically appear on the site.

---

## Updating your photo

1. In GitHub, go to your **portfolio repo → public folder**
2. Click **Add file → Upload files**
3. Upload your new photo
4. Tell Claude: "I uploaded a new photo called [filename], update the hero section to use it"

---

## What NOT to change manually

- Don't edit files in `app/` or `components/` unless Claude guides you — those are the layout files
- Don't change `netlify.toml` or `next.config.ts`
- Always push to **`main`** branch — that's what triggers the Netlify deploy

---

## If something looks broken on the live site

Tell Claude:
> "The site at luisangela.netlify.app is showing [describe the issue]"

Include a screenshot if you can — it helps Claude diagnose faster.

---

## Key files for reference

| File | What it controls |
|------|------------------|
| `lib/data.ts` | All your content (bio, jobs, skills, case studies) |
| `components/Hero.tsx` | Top section with your name, photo, stats |
| `components/Experience.tsx` | Work history section |
| `components/CaseStudies.tsx` | Case study cards |
| `components/Skills.tsx` | Skills grid |
| `public/` | Images and static files |
