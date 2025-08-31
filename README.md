# Nasseri & Associates

Therapy and Clinical Supervision

## Brand Guide

- **Voice and Tone**: Warm, professional, and reassuring. Clear, jargon-light, and client-centered. Emphasize safety, trust, and practical outcomes.
- **Color Palette**:
  - Primary: Calm Teal `#1F8A84`
  - Secondary: Deep Navy `#0F2A3A`
  - Accent: Soft Sand `#E9E4DB`
  - Background: Porcelain `#F7FAFA`
  - Semantic Success: Sage `#7BAE7F`
  - Semantic Warning: Amber `#F6C14B`
- **Typography**:
  - Headings: Inter or Plus Jakarta Sans (clean, modern)
  - Body: Inter or Source Sans 3 (highly readable)
  - Line-height generous for readability; avoid dense blocks of text.
- **Imagery**:
  - Illustration style: Soft, minimal vector scenes conveying growth, calm, and connection. Avoid medicalized imagery.
  - Photography: Natural light, serene spaces, subtle nature motifs. No stock imagery that feels staged or clinical.

## Information Architecture

- Home: Overview of services with distinct hero sections
- Blog: Thought leadership and psychoeducation (file-based posts)
- About + Fees + Insurance + Hours: Practice overview and logistics
- Clinicians: Profiles for each clinician
- Client Forms: Downloadable intake forms and guidance
- Contact: Contact details and secure message form

## Development

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS
- Content: MDX for blog posts (planned)
- Email: API route with SMTP (via environment variables)

## Setup

1. Install dependencies: `pnpm install`
2. Run development server: `pnpm dev`
3. Build for production: `pnpm build`
4. Start production server: `pnpm start`

## Environment Variables

Create `.env.local`:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

## Illustration Notes

- Prefer soft, rounded shapes; gentle gradients within the teal–sand–navy palette.
- Scenes to commission later:
  - Clinical Supervision: Two clinicians reviewing a case, calm workspace.
  - Therapy: Individual in a comfortable chair with growing plant motif.
  - Coaching & Consulting: Workshop flow with light arrow motifs and planners.

## Accessibility

- Maintain WCAG AA contrast ratios
- Use clear focus states, skip links, and semantic HTML
- Provide descriptive alt text for all imagery
