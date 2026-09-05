This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

### Consulting page link previews

`/consult` includes an Open Graph image and a large-image Twitter card. The
1200 × 630 PNG is generated at build time by `app/consult/opengraph-image.tsx`,
including its dimensions, content type, and descriptive alt text in the metadata.

On Netlify, image URLs use `DEPLOY_PRIME_URL` (or `URL`). For another host, set
`NEXT_PUBLIC_SITE_URL` to the public HTTPS origin before building. It overrides
the automatic host value; local development falls back to `http://localhost:3000`.
Use a preview-specific value when testing a preview deployment.

To verify a deployment, inspect the initial HTML for `/consult` for `og:image`,
`og:image:alt`, and `twitter:card=summary_large_image`. Fetch the exact
`og:image` and `twitter:image` URLs from that HTML without authentication and
check that both return a 1200 × 630 PNG. The generated image route is
`/consult/opengraph-image`.

Run the HTTP checks against a live site with:

```bash
node scripts/check-consult-metadata.mjs https://your-site.example
```

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
