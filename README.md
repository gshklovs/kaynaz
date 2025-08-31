## Nasseri & Associates — Therapy and Clinical Supervision

Production‑ready starter for a small practice website.

### Quick start
1) Node 18+ recommended
2) Install: `npm install`
3) Run dev server: `npm run dev`
4) Open: `http://localhost:3000`

Environment (optional) in `.env`:
```
PORT=3000
CONTACT_TO=example@gmail.com
FROM_EMAIL=website@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_user
SMTP_PASS=your_pass
ADMIN_TOKEN=changeme
```

### Pages
- Home: Service hero sections for Therapy, Clinical Supervision, Coaching & Consulting (temp)
- Blog: Markdown posts in `src/content/posts`. Admin form at `/admin/new-post?token=ADMIN_TOKEN`.
- About/Fees/Insurance/Hours: Overview, logistics, clinician profile
- Client Forms: Downloadable intake packet (placeholder PDF)
- Contact: Email form with name, email, phone, payment method, and details

### Design system
- Colors: primary `#0E6BA8`, accent `#1CA7A8`, neutral bg `#F4F7F9`, text `#143642`
- Fonts: Headings `Lora`, body `Inter`
- Components: Buttons, cards, flashes, grids; gentle shadows and rounded corners

### Imagery & illustration guidance
- Illustration style: Nature‑inspired, soft gradients, human‑centered scenes (calming, non‑clinical).
- Photography: Warm, natural light; inclusive representation; avoid harsh contrast.
- Home service sections: Pair each section with a simple, abstract illustration.
- Contact page: One scenic, “happy‑place” image (to be added later).

### Content management
- Blog posts are Markdown with frontmatter: `title`, `date`.
- To add a post via UI: visit `/admin/new-post?token=YOUR_TOKEN`.
- To add a post manually: create `src/content/posts/my-post.md`.

### Deployment
- Any Node platform (Render, Railway, Fly.io, etc.).
- Set environment variables above; consider adding caching/CDN for static assets.

# kaynaz
Business Website
