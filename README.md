# Mostafa Tarek — Portfolio

Personal portfolio website built with React and Vite.

🔗 **Live site:** [mostafa-portfolio-kappa.vercel.app](https://mostafa-portfolio-kappa.vercel.app)

---

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS Modules
- **Email:** EmailJS
- **Deployment:** Vercel

---

## Features

- Responsive design — mobile and desktop
- Skills section with category filtering
- Experience, Projects, and Achievements sections
- Typewriter effect in hero section
- Working contact form via EmailJS
- Smooth scroll navigation

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/professoreggo/mostafa-portfolio.git
cd mostafa-portfolio/client

#Edit data.json in data dir to match your profile

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Environment Variables

Create a `client/.env` file with the following:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [emailjs.com](https://www.emailjs.com).

---

## Deployment

Deployed on Vercel.

Environment variables are configured in the Vercel dashboard.

---
## Bonus [next-step]

The next phase of this project involves migrating from a static data file to a real backend:

Build a Node.js + Express server inside server/
Expose portfolio data via REST API endpoints (/api/projects, /api/skills, /api/experience, etc.)
Remove portfolio.json from the frontend and replace all data imports with fetch() calls to the API
Handle loading and error states in each component
Wire the contact form through the Express backend using Nodemailer instead of EmailJS
Deploy the backend separately and connect it to the frontend via environment variables

---

**Mostafa Tarek** — [mostafa.tarek.abdeljawad@gmail.com](mailto:mostafa.tarek.abdeljawad@gmail.com)  
LinkedIn — [linkedin.com/in/mostafa-tarek-abdeljawad](https://www.linkedin.com/in/mostafa-tarek-abdeljawad)
