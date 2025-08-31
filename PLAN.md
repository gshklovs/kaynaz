## Project Plan: Nasseri & Associates — Therapy and Clinical Supervision

### Objectives
- Create a professional, trustworthy, and welcoming website for a therapy practice.
- Pages: Home, Blog, About/Fees/Insurance/Hours, Client Forms, Contact.
- Clear service descriptions (Clinical Supervision, Therapy, Coaching & Consulting [temp]).
- Contact form that emails submissions with key metadata.
- Simple Blog system enabling admin to add new posts.
- Cohesive, calming visual style and copy suitable for mental health services.

### Audience & Tone
- Audience: Individuals seeking therapy, clinicians seeking supervision, referral sources.
- Tone: Compassionate, clear, reassuring, professional, and ethically grounded.

### Design Direction
- Colors: Calming blues and teals with warm neutrals (primary: #0E6BA8, accent: #1CA7A8, neutral: #F4F7F9, dark: #143642).
- Typography: Headings in a humanist serif (Lora), body in a clean sans-serif (Inter).
- Layout: Generous whitespace, readable line length, large touch-friendly buttons, clear section headings.
- Imagery: Gentle, nature-inspired illustrations; friendly portrait photography; avoid clinical sterility.

### Information Architecture
- Home
  - Practice intro and trust signals
  - Service hero sections (one per service) with CTA
- Blog
  - List of articles with dates and excerpts; individual post pages
  - Admin interface (token-protected) to add markdown posts
- About / Fees / Insurance / Hours
  - Practice overview, approach, credentials, logistics
  - Clinician profile with fees and short bio
- Client Forms
  - Guidance + downloadable intake PDF (placeholder initially)
- Contact
  - Contact details, brief CTA, email form

### Implementation Approach
- Tech: Node.js + Express, EJS templates, CSS with a small custom system, Markdown posts (gray-matter + marked).
- Email: Nodemailer using environment-based SMTP; fallback to console logging if not configured.
- Admin: Minimal token-protected route for creating markdown posts.

### Task Breakdown
1) Scaffold Node/Express app with EJS, routes, and static assets
2) Create design system (colors, typography, components) and base layout
3) Write professional copy across all pages and services
4) Implement Home with service hero sections
5) Implement Blog (list, post detail) and Admin post creation
6) Implement About/Fees/Insurance/Hours with clinician profile
7) Implement Client Forms with downloadable placeholder PDF
8) Implement Contact page with email form+handler
9) README with style guidance and run instructions
10) Install dependencies and run the app
11) QA pass: links, forms, accessibility basics

### Success Criteria
- Pages render with cohesive styling; copy communicates safety and professionalism.
- Contact form accepts submissions and sends email (or logs in fallback). 
- Blog supports listing and reading posts; admin can add posts.
- All nav links work; forms PDF is downloadable.

