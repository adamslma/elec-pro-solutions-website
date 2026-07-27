# Project Overview

- Next.js 16
- React 19
- TypeScript
- Biome
- Tailwind CSS

# Coding Rules

- Use Server Components by default.
- Never use default exports.
- Use async Server Actions.
- Always use absolute imports.

Always prioritize:
Simplicity
Readability
Maintainability
Performance
Accessibility
Security
Avoid unnecessary abstractions and premature optimizations.
Write code that another developer can easily understand months from now.

# TypeScript

Always:
Use strict typing.
Prefer type over interface unless declaration merging or inheritance is required.
Explicitly type all public APIs.
Prefer unknown over any.
Use discriminated unions when appropriate.
Remove unused code and dead types.
Never bypass the type system without a compelling reason.

# React

Prefer Server Components whenever possible.
Only use Client Components when required for:
User interactions
Browser APIs
Local state
Client-side hooks
Animations
Avoid unnecessary useEffect.
Do not derive state that can be computed during rendering.
Do not introduce useMemo, useCallback, or React.memo unless profiling demonstrates a measurable benefit. Trust the React Compiler for common optimizations.
Keep components focused and small.

# Next.js

Follow modern App Router conventions.
Prefer:
Server Components
Server Actions
Route Handlers
Streaming
Suspense
Partial Prerendering (when appropriate)
Use:
next/image
next/link
next/font
generateMetadata()
Minimize client-side JavaScript whenever possible.

# Code Style

Write self-documenting code.
Always:
Use descriptive names.
Keep functions short.
Follow the Single Responsibility Principle.
Prefer early returns.
Reduce nesting.
Avoid comments that explain what the code does.
Only comment why a particular decision was made.

# Performance

Avoid:
Unnecessary re-renders
Duplicate API requests
Expensive computations inside rendering
Large client-side bundles
Prefer server-side rendering whenever possible.
Optimize images and assets.
Leverage caching appropriately.

# Accessibility

Every UI must follow WCAG best practices.
Always ensure:
Semantic HTML
Keyboard navigation
Proper labels
Accessible forms
Sufficient color contrast
Alt text for images
Accessibility is never optional.

# SEO

Every public page should include:
Meaningful title
Meta description
Correct heading hierarchy
Exactly one <h1>
Clean URLs
Open Graph metadata when relevant
Structured data when applicable
Prefer server-rendered content for indexable pages.

# Security

Never expose secrets to the client.
Always validate user input.
Never trust client-side data.
Handle errors gracefully.
Follow the principle of least privilege.

# Code Quality

Before considering a task complete, ensure:
TypeScript compiles without errors.
Biome reports no issues.
There are no unused imports or variables.
The implementation follows the project's architecture.
Existing functionality remains unaffected.
Avoid introducing technical debt.

# Decision Making

Before writing code:
Understand the problem.
Look for the simplest correct solution.
Ensure consistency with the existing architecture.
Implement clean, production-ready code.
Briefly explain non-obvious technical decisions.
If multiple solutions exist, choose the one that maximizes long-term maintainability rather than short-term convenience.

# Architecture

app/
components/
lib/
services/

# Design

Look at /design/DESIGN.md for design instructions.

# Role and persona

/persona/PERSONA.md will tell you how to act and the role you will have in this project.
