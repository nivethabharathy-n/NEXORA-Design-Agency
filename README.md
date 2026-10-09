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
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
