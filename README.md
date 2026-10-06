# Meher Sai Preetam Madiraju — Personal Portfolio & Research Portal

Live URL: **[https://mehersaipreetam.github.io/](https://mehersaipreetam.github.io/)**

The personal portfolio and academic research portal for **Meher Sai Preetam Madiraju** — Data Scientist at Archer-Daniels-Midland (ADM) and Graduate Student at Georgia Institute of Technology (MS in Computer Science, Machine Learning specialization).

---

## ⚡ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Glassmorphic Dark UI (`#090a0f`, electric indigo & cyan neon accents)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Animation**: Framer Motion
- **Bundler**: Vite
- **CI/CD**: GitHub Actions (`deploy.yml` with `actions/deploy-pages@v4`)

---

## 🏗️ Architecture & Sections

1. **Header & Navigation**: Sticky glassmorphic bar with active section highlight, quick social links, and mobile responsive drawer.
2. **Hero Section**: Value proposition, status pill badge (`🟢 Data Scientist @ ADM | MS CS @ Georgia Tech`), interactive multi-tab code card switcher (Agent Mesh, Sparse Bagging, Profile JSON), and verified stats.
3. **About & Architectural Pillars**: Executive narrative, Georgia Tech verification badge, and 3 core architectural pillars (Agentic AI & A2A Protocols, Knowledge Graph RAG, Statistical ML & Ensemble Calibration).
4. **Work Experience**: Interactive industry vs. research filter, verified company roles (ADM, Tiger Analytics, Merkle, MITACS / INRS, Ugam Solutions), and quantified business deliverables.
5. **Research & Publications**: Publication cards with arXiv badges, expandable abstracts, code repo links, Google Scholar banner, and one-click "Copy BibTeX" citation generator.
6. **Technical Skills Matrix**: 6 domain categories with categorized icon cards and tech pills (Agentic AI, Generative AI & NLP, Machine Learning & Stats, MLOps & Infrastructure, Big Data, Languages).
7. **Education**: Georgia Tech MSCS (Machine Learning, gatech.edu verified) and Manipal Institute of Technology BTech in Computer Science (9.11/10 CGPA).
8. **Engineering Notes / Blog Preview**: Upcoming technical deep-dives with notification signup.
9. **Contact & Socials**: Interactive one-click "Copy Email" (`mehersaipreetam@gmail.com`), mailto form, verified LinkedIn, GitHub, and Google Scholar links.
10. **Footer**: Quick navigation, copyright, and smooth back-to-top button.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Typecheck and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 CI/CD Automated Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` which:
1. Runs `npm ci`
2. Executes `npm run build`
3. Uploads `./dist` artifact
4. Deploys to GitHub Pages via `actions/deploy-pages@v4`
