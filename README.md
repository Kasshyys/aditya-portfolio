# Aditya Prakash — Personal Portfolio

A premium, high-performance portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Lenis (Smooth Scroll)
- **Forms**: React Hook Form, Zod
- **Email**: Resend
- **Icons**: Lucide React
- **Language**: TypeScript

## Key Features

- ✨ **Smooth Visuals**: Momentum-based scrolling and staggered reveal animations.
- 🌓 **Theme System**: Persisted dark/light mode with system preference detection.
- 🖱️ **Custom Interactions**: Magnetic buttons and a dynamic custom cursor.
- 📱 **Fully Responsive**: Optimized for all devices from mobile to 4K.
- 📥 **Contact Form**: Integrated with Resend API for direct email delivery.
- 🚀 **Performance**: Optimized images, fonts, and smooth 60fps animations.
- ♿ **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file with your credentials:
   ```env
   RESEND_API_KEY=your_resend_key
   CONTACT_EMAIL=your_email@gmail.com
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable UI components and page sections.
- `lib/`: Utility functions, data files, and shared configurations.
- `hooks/`: Custom React hooks for specialized logic.
- `context/`: Global state management (Theme).
- `types/`: TypeScript interface definitions.
- `public/`: Static assets (images, fonts, manifest).

## Credits

Designed & Built by [Aditya Prakash](https://github.com/Kasshyys).
