🚀 Next.js 14 Prisma Shadcn Starter (SQL Server)

A starter template for building modern apps with:

⚡ Next.js 14 (App Router)

🗄️ Prisma ORM with SQL Server

🔐 NextAuth.js for authentication

🎨 Shadcn UI + TailwindCSS with theming

✅ Zod for form validation

🔔 Notistack for global notifications

📊 TanStack Table with search & pagination

📦 Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

2. Install dependencies
npm install

3. Setup environment variables

Create a .env file in the root:

# Database connection (SQL Server via Prisma)
DATABASE_URL="sqlserver://localhost:1433;database=mydb;user=sa;password=YourPassword;trustServerCertificate=true;"

# NextAuth secret
NEXTAUTH_SECRET="your-random-secret"

# NextAuth URL
NEXTAUTH_URL="http://localhost:3000"

🗄️ Database Setup

Run Prisma migrations:

npx prisma migrate dev


Open Prisma Studio (GUI for DB):

npx prisma studio

🎨 Theming

Themes are configured in lib/shadcn-plugin.ts.
Example custom colors:

":root": {
  "--brown-dark-1": "355 45% 31%",
  "--magenta-dark-1": "200 55% 37%",
  "--purple-dark-1": "261 51% 51%",
  "--dark-green-1": "145 58% 55%",
},

theme: {
  "dark-1": "hsl(var(--brown-dark-1))",
  "dark-2": "hsl(var(--magenta-dark-1))",
  "dark-3": "hsl(var(--purple-dark-1))",
  "dark-4": "hsl(var(--dark-green-1))",
}


Switch themes globally using <ThemeProvider> in app/layout.tsx.

🔔 Notifications

Wrapped with a NotificationProvider (using notistack).
Trigger notifications anywhere:

import { useSnackbar } from "notistack";

const MyComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <button onClick={() => enqueueSnackbar("Action successful!", { variant: "success" })}>
      Show Notification
    </button>
  );
};

📊 Tables with Search & Pagination

This starter includes TanStack Table v8 with:

Server/client pagination

Search input

Sorting

▶️ Run the App
npm run dev


App will be available at:
👉 http://localhost:3000

🛠 Tech Stack

Next.js 14

Prisma

SQL Server

NextAuth.js

Shadcn UI

Zod

TanStack Table

Notistack

📌 Notes

Default DB: SQL Server (change DATABASE_URL for Postgres/MySQL if needed).

Includes ThemeProvider and NotificationProvider for global support.

Use this as a starter kit for your SaaS, dashboards, or internal tools.

🔥 Happy coding!
