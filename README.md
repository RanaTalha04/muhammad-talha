# Portfolio Website

This repository contains a personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

## Overview

The site includes sections for:

- Hero and introduction
- Project showcase
- Skills and experience
- Contact information

It also supports responsive design and fast local development using Vite.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui

## Local setup

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
```

2. Change into the project directory:

```sh
cd muhammad-talha
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

5. Open the local development URL shown in the terminal.

## Available scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build locally

## Deployment

The app can be deployed to any static hosting provider that supports Vite builds, such as Vercel, Netlify, or GitHub Pages.

To build for production:

```sh
npm run build
```

Then deploy the contents of the `dist` directory.

## Project structure

- `src/` - application source files
- `src/components/` - page and UI components
- `src/pages/` - route pages
- `src/lib/` - utility functions and hooks
- `public/` - static assets

## Notes

- Update project content in `src/data/projects.ts` and relevant components under `src/components/`.
- Tailwind configuration is located in `tailwind.config.ts`.
- Vite configuration is located in `vite.config.ts`.
