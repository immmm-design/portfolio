# Ivan Makarenko - Portfolio Website

A clean, semi-Apple-style portfolio website built with Next.js, TypeScript, and Tailwind CSS. This site showcases Ivan's work as an aspiring Product Manager with a strong robotics and automation engineering background.

## Features

- **Semi-Apple Design**: Minimal, calm, and premium aesthetic with generous white space
- **Responsive**: Mobile-first design that looks excellent on all devices
- **Smooth Animations**: Subtle fade/slide-in animations using Framer Motion
- **Interactive Sections**:
  - Hero with gradient visual
  - About with quick facts
  - Experience timeline
  - Projects with filtering by tags
  - Skills grouped by category
  - Education
  - Contact information
- **Data-Driven**: Easy to extend with new projects, roles, and skills
- **Smooth Scrolling**: Sticky navigation with smooth scroll to sections

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: System fonts (San Francisco on macOS, Segoe UI on Windows, etc.)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky nav with smooth scroll
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects with filtering
│   ├── Skills.tsx          # Skills grouped by category
│   ├── Education.tsx       # Education section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── data/
│   ├── config.ts           # Site configuration
│   ├── experience.ts       # Experience data
│   ├── projects.ts         # Projects data
│   ├── skills.ts           # Skills data
│   ├── education.ts        # Education data
│   └── hero.ts             # Hero highlights
├── types/
│   └── index.ts            # TypeScript types
└── public/
    └── resume/             # Resume PDF location
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Updating Content

All content is stored in the `data/` folder as TypeScript files. To update:

1. **Personal Information**: Edit `data/config.ts`
2. **Experience**: Add/edit roles in `data/experience.ts`
3. **Projects**: Add/edit projects in `data/projects.ts`
4. **Skills**: Modify skill groups in `data/skills.ts`
5. **Education**: Update degrees in `data/education.ts`
6. **Hero Highlights**: Edit highlights in `data/hero.ts`

### Adding a Resume

Replace the placeholder file at `public/resume/Ivan_Makarenko_Resume.pdf` with your actual resume PDF.

### Theming

You can customize the accent color and other theme settings in `data/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  // ...
  accentColor: '#007AFF', // Change this to your preferred color
  animationsEnabled: true, // Toggle animations
};
```

### Adding New Projects

To add a new project, simply add an object to the `projects` array in `data/projects.ts`:

```typescript
{
  id: 'new-project',
  title: 'Project Title',
  role: 'Your Role',
  context: 'Context/Organization',
  tags: ['Tag1', 'Tag2'],
  description: [
    'Description point 1',
    'Description point 2',
  ],
  link: 'https://example.com',
  linkText: 'View Project',
}
```

The site automatically sorts and displays the new project.

## Design Philosophy

This portfolio follows Apple's design principles:

- **Clarity**: Content is organized logically with clear hierarchy
- **Deference**: Design defers to content, never overwhelming it
- **Depth**: Subtle shadows and animations create visual depth
- **Whitespace**: Generous spacing creates breathing room
- **Typography**: Clean sans-serif fonts with careful sizing
- **Interactions**: Subtle, purposeful animations enhance UX

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Static Export**: `npm run build` generates static files

## License

This project is open source and available under the MIT License.

## Contact

Ivan Makarenko
- Email: ivan.makarenko2001@gmail.com
- LinkedIn: [linkedin.com/in/ivan-makarenko](https://www.linkedin.com/in/ivan-makarenko)
- Location: New York, NY
