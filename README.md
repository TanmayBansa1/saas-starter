# SaaS Starter Kit

A modern SaaS starter kit built with the latest technologies for rapid product development. This project is pre-configured with authentication, database, UI, and developer tooling for a seamless developer experience.

---

## 🚀 Technologies Included

- **Next.js** (App Router, React 19)
- **Prisma** (PostgreSQL ORM)
- **Clerk** (Authentication)
- **Tailwind CSS** (with PostCSS, custom theming)
- **shadcn/ui** (Component library)
- **Radix UI** (Accessible UI primitives)
- **Lucide Icons** (Icon set)
- **Framer Motion** (Animations)
- **Zod** (Schema validation)
- **TypeScript** (Strict typing)
- **ESLint & Prettier** (Linting & formatting)
- **pnpm** (Fast package manager)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd saas-starter
```

### 2. Install Dependencies

This project uses **pnpm**. If you don't have it:

```bash
npm install -g pnpm
```

Then install:

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in the required values:

```bash
cp .env.example .env
```

- Set up your PostgreSQL `DATABASE_URL` (see `.env.example` for format)
- [Sign up for Clerk](https://clerk.dev/) and add your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

### 4. Set Up the Database

Run the following to create and migrate your database:

```bash
pnpm db:generate
```

To open Prisma Studio (GUI for your DB):

```bash
pnpm db:studio
```

### 5. Run the Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🧩 Project Structure

- `src/` — Application source code
- `prisma/` — Prisma schema & migrations
- `public/` — Static assets
- `.env.example` — Example environment variables

---

## 📝 Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm lint` — Run ESLint
- `pnpm format:write` — Format codebase
- `pnpm db:generate` — Run Prisma migrations
- `pnpm db:studio` — Open Prisma Studio

---

## 🧑‍💻 Developer Tooling

- **ESLint** & **Prettier** for code quality
- **TypeScript** strict mode
- **shadcn/ui** and **Radix UI** for accessible, customizable components
- **pnpm** for fast, reliable installs

---

## 📦 Deployment

You can deploy this app easily to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or Docker. See official Next.js docs for best practices.

---

## 🤝 Credits

- [Next.js](https://nextjs.org/)
- [Prisma](https://prisma.io/)
- [Clerk](https://clerk.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zod](https://zod.dev/)

---

## 📄 License

MIT
