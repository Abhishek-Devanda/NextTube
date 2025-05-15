# NextTube

NextTube is a web application built with Next.js, aiming to provide a YouTube-like experience. It features user authentication, video browsing,user playlists, channel pages, and a theming system.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Authentication:** [Clerk](https://clerk.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) 
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

*   **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

First, set up your environment variables. Create a `.env.local` file in the root of the project and add your Clerk and YouTube API credentials:

```env
#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

#NextJS
NEXT_PUBLIC_DOMAIN_URL="https://localhost:3000"

#Google
YOUTUBE_API_KEY=""
```

Then, install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features

*   User Authentication (Sign In/Sign Up) with Clerk
*   Home page with video listings
*   Channel pages (`/channel/[handle]`)
*   Video feed pages (`/feed/[feedType]`)
*   Playlists page (`/playlists`)
*   Search functionality (`/search`)
*   Dark/Light Theme Switch
*   Responsive Sidebar Navigation
*   Comment sections for videos


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.# NextTube
