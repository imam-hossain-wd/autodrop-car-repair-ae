```markdown
# 🚗 AutoFix Mobile Mechanic Dubai

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0%2B-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![SEO Performance](https://img.shields.io/badge/SEO-100%25_Optimized-brightgreen?style=for-the-badge)](https://www.autofixmechanicdubai.com)

A high-performance, enterprise-grade Next.js web application built for **AutoFix Mobile Mechanic Dubai**. Engineered for ultra-fast load speeds, local SEO domination (GEO/AEO friendly), dynamic landing page generation, and zero-latency lead conversion across Dubai, UAE.

---

## 🌟 Key Features

* **⚡ Ultra-Fast Performance:** Built on Next.js App Router with Server-Side Rendering (SSR) and Static Site Generation (SSG) for sub-second page loads.
* **📍 GEO & AEO Search Engine Engine Optimization:** Dynamic schema injection (`Schema.org` LocalBusiness, Service, FAQ, Breadcrumbs) optimized for AI Search Engines (Perplexity, Gemini, ChatGPT) and Google Local Pack.
* **🔧 Dynamic Configuration Architecture:** Centralized `SiteConfig` file controlling service offerings, area coverage, contact links, GMB parameters, and branding.
* **📱 High-Converting UI/UX:** Mobile-first layout with fixed click-to-call, dynamic WhatsApp booking triggers, and responsive UI components powered by `@remixicon/react`.
* **🗺️ Multi-Area Coverage System:** Automated routing and structured content targeting key Dubai hubs (*Al Safa, Business Bay, Downtown Dubai, Dubailand, JVC, etc.*).
* **🛠️ Modular Component Design:** Scalable, reusable layout system including dynamic service cards, testimonial sliders, area maps, and interactive CTA modules.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 14+](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) / ES6+ JavaScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [Remix Icon](https://remixicon.com/) (`@remixicon/react`) |
| **Deployment** | [Vercel](https://vercel.com/) / Node.js Engine |
| **SEO & Schema** | Custom JSON-LD Generators, Dynamic OpenGraph & Sitemap XML |

---


---

## 🚀 Getting Started

Follow these steps to set up the repository locally on your machine.

### Prerequisites

* **Node.js** `v18.17.0` or higher
* **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/autofix-dubai.0.git](https://github.com/your-username/autofix-dubai.0.git)
cd autofix-dubai

```


2. **Install dependencies:**
```bash
npm install
# or
pnpm install

```


3. **Set up Environment Variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=[https://www.autofixmechanicdubai.com](https://www.autofixmechanicdubai.com)

```


4. **Run the development server:**
```bash
npm run dev
# or
pnpm dev

```


5. **Open in browser:**
Navigate to `http://localhost:3000` to view the application.

---

## ⚙️ Configuration & Content Management

All global content, service lists, target locations, contact numbers, and social links are controlled via `src/config/siteConfig.ts`.

### Updating Business Credentials

To update phone numbers, WhatsApp routes, or GMB profiles across the entire application, modify the exported `SiteConfig` object:

```typescript
export const SiteConfig = {
    brandName: "AutoFix Mobile Mechanic Dubai",
    displayNumber: "+971 50 123 4567",
    numberCallLink: "tel:+971501234567",
    whatsappCallLink: "[https://wa.me/971501234567](https://wa.me/971501234567)",
    location: "Al Safa",
    city: "Dubai",
    country: "UAE",
    // ...
};

```

---

## 📊 Build & Production Deployment

To generate an optimized production build:

```bash
# Generate production bundle
npm run build

# Run local production server
npm run start

```

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Import the project into your **Vercel Dashboard**.
3. Set your build command to `next build` and output directory to `.next`.
4. Deploy instantly with zero-configuration SSL & Edge Caching.

---

## 👨‍💻 Author & Maintainer

* **Developer & Technical SEO Specialist:** Md Zahed
* **Website:** [autofixmechanicdubai.com](https://www.autofixmechanicdubai.com)
* **Email:** [autofixmechanicdubai@gmail.com](https://www.google.com/search?q=mailto%3Aautofixmechanicdubai%40gmail.com)

---

## 📄 License

This project is proprietary software developed for **AutoFix Mobile Mechanic Dubai**. All rights reserved.

```

```