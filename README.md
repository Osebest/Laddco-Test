# Ladd & Co.

**Advisory and execution for families, principals, and private institutions with interests that demand discretion.**

Ladd & Co. is a private advisory practice. We represent clients across transactions, capital strategy, structuring, and the management of sensitive matters across jurisdictions.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui with Base UI primitives
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Prerequisites

- **Node.js** >= 20.9.0 (use `nvm use 20` if you manage versions with nvm)
- **pnpm** >= 10

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Osebest/Laddco-Test
   cd Laddco-Test
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Start the development server       |
| `pnpm build` | Create a production build          |
| `pnpm start` | Serve the production build locally |
| `pnpm lint`  | Run ESLint across the project      |

## Project Structure

```
app/
  layout.tsx      # Root layout (fonts, global styles)
  page.tsx        # Root page that routes to home
  home/
     page.tsx      # Home page with all sections
     components/   # Reusable components for the home page
       Hero/
       Clients/
       ServiceSection/
       Presence/
       AboutFirm/
       ...
  globals.css     # Global styles & Tailwind imports
public/           # Static assets
```

## Troubleshooting

- **Node version error** — This project requires Node.js >= 20.9.0. Run `nvm use 20` if you're on an older version.
- **Native binding errors (Tailwind/oxide)** — Delete `node_modules` and `.next`, then run `pnpm install` to rebuild native dependencies for your current Node version.
