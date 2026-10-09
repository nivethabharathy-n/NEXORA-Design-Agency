# NEXORA Design Agency

A modern, visually engaging website for a creative agency, designed to showcase portfolio projects through a clean, responsive layout and interactive visual elements.

## Live Demo

**Live Website:** https://nexora-design-agency.vercel.app/

## GitHub Repository

https://github.com/nivethabharathy-n/NEXORA-Design-Agency

## Project Overview

NEXORA Design Agency is a creative agency website that presents selected projects across branding, content production, social media marketing, and creative consulting.

The website focuses on visual presentation, a dark-themed interface, responsive layouts, and smooth hover transitions to create an engaging browsing experience.

## Tech Stack

* **Next.js** — React framework for building the website.
* **React.js** — Component-based user interface development.
* **JavaScript** — Application logic and project data.
* **Tailwind CSS** — Styling, responsive layouts, and visual effects.
* **Vercel** — Website deployment and hosting.
* **Git and GitHub** — Version control and source code management.

## Features

* **Portfolio Showcase:** Displays selected creative projects in a structured grid.
* **Project Categories:** Identifies work across content production, branding, social media marketing, and creative consulting.
* **Responsive Layout:** Adapts the portfolio grid to different screen sizes.
* **Interactive Hover Effects:** Includes transitions, image scaling, and visual highlighting.
* **Image Optimization:** Uses the Next.js Image component to display portfolio images.
* **Dark Theme:** Provides a consistent, modern visual style.
* **Project Data Structure:** Uses a JavaScript array of objects to manage project titles, categories, image paths, and display settings.

## Project Structure

```text
NEXORA-Design-Agency/
├── public/
│   └── Portfolio/
│       ├── Project-1.jpg
│       ├── Project-2.jpg
│       ├── Project-3.jpg
│       ├── Project-4.jpg
│       ├── Project-5.jpg
│       └── Project-6.jpg
├── src/
│   └── components/
│       └── Portfolio.js
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above highlights the portfolio-related files. Other application files may also be present in the repository.*

## Setup Instructions

### Prerequisites

Install the following tools before running the project locally:

* Node.js (LTS version recommended)
* npm (included with Node.js)
* Git

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/nivethabharathy-n/NEXORA-Design-Agency.git
```

### 2. Navigate to the Project Directory

```bash
cd NEXORA-Design-Agency
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Website

Open the following URL in your browser:

http://localhost:3000

The website should now run locally in development mode.

## Assumptions

* Portfolio images are stored in the `public/Portfolio/` directory.
* The website is intended to showcase creative agency projects and their associated service categories.
* Portfolio information is maintained in a JavaScript array for convenient updates.
* The layout is designed to support desktop, tablet, and mobile screen sizes.
* The project uses the Next.js framework and its configured development scripts.

## Additional Features

* Smooth CSS transitions for interactive portfolio cards.
* Image scaling and saturation effects on hover.
* Gradient overlays that reveal project titles and categories.
* Individual image display settings using `cover` and `contain`.
* Configurable background colors for portfolio cards.
* Centralized project data for easier portfolio maintenance.

## Deployment

The website is deployed using Vercel.

**Production URL:** https://nexora-design-agency.vercel.app/

The GitHub repository can be connected to Vercel to support future deployments when changes are pushed to the configured branch.

## Future Improvements

* Add individual project detail pages.
* Include direct links to completed client projects.
* Improve accessibility and keyboard navigation.
* Add portfolio category filtering.
* Expand the portfolio with additional projects and case studies.

## Author

**Nivetha Bharathy**

GitHub: https://github.com/nivethabharathy-n

---

Thank you for visiting NEXORA Design Agency!

