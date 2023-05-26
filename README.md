# 🍽️ MJB Boilerplate

### Customized Next.js + TypeScript + CSS Modules + React Testing Library & Jest Quickstart

- ⚡ Next.js 13
- ⚛️ React 18
- ✨ TypeScript
- 🎨 CSS Modules
- 🃏 Jest + React Testing Library
- 💖 Prettier
- 🛄 SVGR webpack set-up and sample icons
- Starter CSS theme variables, custom 404 page, and example components and test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) via 🍽️ [MJB Boilerplate](https://github.com/MollyJeanB/mjb-boilerplate).

## Getting Started

### 1. Clone this template

```
npx create-next-app -e https://github.com/MollyJeanB/mjb-boilerplate YOUR_APP_NAME
```

### 2. Install dependencies

Node Version Manager (NVM) is recommended to maintain node version consistency with dependencies. If you don't already have NVM set up on your computer, use [this guide](https://github.com/nvm-sh/nvm) to get started. To specify the node version in the `.nvmrc` file:

```
nvm use
```

Then install dependencies:

```
yarn install
```

### 3. Build out your app!

First, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Arimo. To change the global font, swap in any [Google Font](https://fonts.google.com/) in `src/pages/_app.tsx`.

There are two pre-built example components with unit tests in `src/components`, an example page route at `src/pages/example.tsx`, and a custom 404 page at `src/pages/404.tsx`.

Customize `src/styles/variables.css` with your own theme variables for use throughout the app.

### 4. Test and format

To run tests in watch mode:

```
yarn unit
```

And to run all tests once with coverage information:

```
yarn test
```

This project uses Prettier for code formatting. To format all files:

```
yarn format
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Attributions

🍽️ Favicon via [Favicon.io](https://favicon.io/)
