# Professional Developer Portfolio

A clean, responsive, modern single-page portfolio template built with semantic HTML5 and vanilla CSS3.

## Portfolio Structure & Sections
1. **Header & Navigation (`<header>`)**: Sticky glassmorphic navigation bar with smooth anchor links to all key sections and a prominent contact button.
2. **Hero Section (`.hero`)**: Eye-catching introductory banner featuring value proposition, primary call-to-action buttons, and an interactive code card graphic.
3. **About Me (`#about`)**: Personal background story, core technical skill tags, and career statistics (Years Experience, Projects Shipped, Client Satisfaction).
4. **Featured Projects (`#projects`)**: Grid layout showcasing key projects with gradients, technology tags, live demo links, and GitHub repository links.
5. **Work Experience (`#experience`)**: Chronological timeline tracking professional roles, company names, key achievements, and dates.
6. **Contact Section (`#contact`)**: Clean, accessible contact form with name, email, and message fields.
7. **Footer (`<footer>`)**: Copyright information and social media links (GitHub, LinkedIn, Twitter).

---

## Publishing on GitHub Pages

Follow these step-by-step instructions to publish this portfolio live on GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
4. Set visibility to **Public**.
5. Do *not* initialize with a README (since you have local files ready to push), then click **Create repository**.

### Step 2: Push Local Files to GitHub
Open your terminal inside the `/workspace/portfolio` directory and run the following commands:

```bash
git init
git add .
git commit -m "Initial commit: Add portfolio template"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```
*(Replace `<your-username>` and `<repository-name>` with your actual GitHub username and repository name).*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab near the top right.
3. In the left sidebar, click on **Pages** (under "Code and automation").
4. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` (or `gh-pages`) and `/ (root)` as the folder, then click **Save**.
6. Within a minute, GitHub will provide a live URL (e.g., `https://<your-username>.github.io/<repository-name>/`) where your portfolio is hosted!
