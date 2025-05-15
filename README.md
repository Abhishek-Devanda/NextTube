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

### Configure Google OAuth with Clerk

To enable users to sign in with Google and grant your application access to their YouTube data, you'll need to configure a custom Google OAuth provider in your Clerk dashboard.

1.  **Create Google Cloud Project & OAuth Credentials:**
    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Create a new project or select an existing one.
    *   Navigate to "APIs & Services" > "Credentials".
    *   Click "Create Credentials" > "OAuth client ID".
    *   Choose "Web application" as the application type.
    *   Add an "Authorized redirect URI". You can find this URI in your Clerk dashboard under "User & Authentication" > "Social Connections" > "Google". It will look something like `https://clerk.YOUR_DOMAIN.com/oauth_callback` or `https://YOUR_CLERK_FRONTEND_API_HOSTNAME/v1/oauth_callback`.
    *   Save the Client ID and Client Secret.

2.  **Enable YouTube Data API v3:**
    *   In the Google Cloud Console, navigate to "APIs & Services" > "Library".
    *   Search for "YouTube Data API v3" and enable it for your project.

3.  **Configure Clerk:**
    *   Go to your [Clerk Dashboard](https://dashboard.clerk.com/).
    *   Navigate to "User & Authentication" > "Social Connections".
    *   Enable the Google social connection if it's not already.
    *   If you need to customize scopes, you might need to set it up as a "Custom OAuth provider" or ensure the default Google provider allows scope customization.
    *   Enter the Client ID and Client Secret obtained from the Google Cloud Console.
    *   Add the following scopes:
        *   `https://www.googleapis.com/auth/youtube.force-ssl`
        *   `https://www.googleapis.com/auth/youtube`
        *   `https://www.googleapis.com/auth/youtube.readonly`
    *   Save your configuration.


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
