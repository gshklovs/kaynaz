## Nasseri & Associates — Therapy and Clinical Supervision

A calm, trustworthy website built with Next.js and Tailwind CSS.

### Quick Start
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open `http://localhost:3000`

### Environment Variables (Email Sending)
Create `.env.local` with the following (optional; if omitted, emails are logged):
```
CONTACT_TO=example@gmail.com
MAIL_FROM=example@gmail.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
```

### Brand Style
- **Tone**: Warm, reassuring, professional. Emphasize safety, clarity, and progress.
- **Colors**:
  - Primary teal: `#0A7C86`
  - Deep navy: `#0C2D48`
  - Sky accent: `#4FC3F7`
  - Sand background: `#F6F1EB`
  - Text slate: `#1F2937`
- **Typography**:
  - Headings: Playfair Display
  - Body: Inter
- **Illustrations**: Soft, minimal line art or abstract organic shapes; nature motifs.

### Content Editing
- Home copy: `src/app/page.js`
- About/Fees/Insurance/Hours: `src/app/about/page.js`
- Clinicians: `src/app/clinicians/page.js` (add more profiles as sections)
- Client Forms: `src/app/forms/page.js`; add PDFs to `public/forms/`
- Blog posts: Markdown files in `content/blog/*.md`

### Services Copy (Website)
- Clinical Supervision: Supportive, structured mentorship to advance clinical judgment, uphold ethics, and strengthen interventions.
- Individual Therapy: Personalized, evidence‑informed care to navigate stress, anxiety, transitions, and burnout with practical skills.
- Coaching & Consulting (temporary): Outcome‑focused guidance for professional clarity, wellbeing strategies, and organizational needs.

### Deployment
- Vercel recommended. Add environment variables in the project settings.
- Build command: `npm run build`
- Output: Next.js default.

