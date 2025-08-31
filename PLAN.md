## Project Plan: Nasseri & Associates — Therapy and Clinical Supervision

### Objectives
- Build a calm, trustworthy, and professional therapy practice website using Next.js (App Router) and Tailwind CSS (JavaScript).
- Provide clear information about services, clinicians, fees/insurance/hours, client forms, and contact.
- Include a blog placeholder with a simple content workflow for adding articles (file-based for now).
- Implement a contact form that sends an email with structured metadata about payment/insurance preference.

### Brand Style (Initial Direction)
- **Tone**: Warm, reassuring, professional, and clear. Emphasize safety, privacy, and competence.
- **Color palette**: 
  - Primary: Calm teal (#0A7C86)
  - Secondary: Deep navy (#0C2D48)
  - Accent: Sky (#4FC3F7)
  - Background: Off‑white sand (#F6F1EB) and white (#FFFFFF)
  - Text: Slate/dark gray (#1F2937)
- **Typography**: 
  - Headings: Playfair Display (serif) — elegant and calm
  - Body: Inter (sans-serif) — highly readable
- **Illustration/Imagery guidance**: Soft, minimal line illustrations or abstract organic shapes; nature motifs (ocean, sky, greenery). Avoid harsh contrast or busy scenes.
- **Accessibility**: Maintain AA contrast; generous spacing; friendly focus states.

### Site Map
- Home
- Blog (placeholder; file-based posts)
- About (About Us, Fees, Insurance, Hours)
- Clinicians (multiple profiles supported)
- Client Forms (download links; placeholder PDFs initially)
- Contact (form + logistics)

### Content Strategy (Professional Copy)
- Home: Brief intro to the practice and three service hero sections with titles and supportive paragraphs:
  - Clinical Supervision
  - Individual Therapy
  - Coaching & Consulting (temporary offering)
- Blog: Simple index of posts with dates and excerpts.
- About: Overview of approach, fees/insurance guidance, and hours.
- Clinicians: Profile(s) with headshot placeholder, credentials, fees, and approachable bio copy.
- Client Forms: Short instructions and links to downloadable forms.
- Contact: Phone/email, virtual availability, and a brief invitation to schedule a complimentary consultation.

### Technical Plan
- Next.js App Router, Tailwind CSS, Source directory enabled, JavaScript only.
- Global layout with header/footer navigation and metadata for SEO/OG.
- Blog: Markdown-based posts in `content/blog` parsed at build-time.
- Contact form API: Nodemailer with env-configured SMTP; logs in dev if unset.
- Forms: Link to `/forms/` files in `public/` with placeholders; add real PDFs later.

### Tasks (Execution Checklist)
1. Scaffold Next.js app with Tailwind (JS), App Router, `src/` structure
2. Establish brand style tokens (colors, fonts) in Tailwind and CSS
3. Create shared layout with header, nav, and footer
4. Implement Home page with three service hero sections and CTAs
5. Add Blog listing and single-post pages (Markdown-based content)
6. Build About page (About Us, Fees, Insurance, Hours)
7. Implement Clinicians page with one sample profile and fee schedule
8. Create Client Forms page with instructions and placeholder links
9. Implement Contact page with email form and server route
10. Add SEO metadata and OpenGraph defaults
11. Write README with style guide and content instructions
12. Prepare deployment and environment variable instructions

### Risks/Notes
- Email sending requires SMTP credentials in environment variables; otherwise, API will be stubbed to log.
- File-based blog requires commit-based updates for now (no live write access on server FS).
- PDFs cannot be generated here; add actual files to `public/forms/` later.

