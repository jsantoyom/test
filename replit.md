# Overview

This is a full-stack web application built with a React frontend and Node.js/Express backend. The project follows a monorepo structure with shared TypeScript types and schemas. It's designed as a starter template for building modern web applications with a complete authentication system, database integration, and a polished UI component library.

The application uses a PostgreSQL database with Drizzle ORM for type-safe database operations, shadcn/ui components for the frontend interface, and TanStack Query for efficient data fetching and state management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state, React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for runtime type validation integrated with Drizzle
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot reload with tsx and Vite middleware integration

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle migrations with push-based deployment
- **Type Safety**: Shared schema definitions between frontend and backend
- **Session Storage**: PostgreSQL-backed sessions for authentication persistence

## Authentication & Authorization
- **Session-based Authentication**: Express sessions with secure cookie configuration
- **Password Security**: Ready for bcrypt integration (storage interface prepared)
- **User Management**: Complete user CRUD operations with username/password schema
- **Authorization**: Request-based authorization checking through storage interface

## External Dependencies
- **Database Provider**: Neon Database (PostgreSQL serverless)
- **UI Framework**: Radix UI primitives for accessible components
- **Development Tools**: Replit-specific plugins for enhanced development experience
- **Font Loading**: Google Fonts integration (DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Build Optimization**: esbuild for server bundling, Vite for client bundling