# Accessible UI Components - Week 6 Assignment

## Overview

This project implements reusable, accessible UI component systems using advanced React patterns. The assignment focuses on building Modal, Accordion, and Tabs components with clean APIs, state management, composition, Context, keyboard interaction, focus management, and ARIA accessibility.

## What Was Created

- Accessible Modal component with focus management and restoration
- Accordion supporting single and multiple expanded items
- Tabs with automatic activation and keyboard navigation
- Compound Component APIs for all three UI systems
- Context and Provider-based component state sharing
- Custom `useModalFocus` hook for Modal behavior
- Keyboard-accessible interactions and ARIA relationships
- Separate demo components showcasing component reuse

## Module Responsibilities

| Module | Responsibility |
|---|---|
| `components/modal` | Provides the reusable Modal system, including state, compound components, Context, ARIA semantics, and focus behavior. |
| `components/accordion` | Provides the Accordion system with single/multiple modes, shared state, item coordination, keyboard navigation, and ARIA relationships. |
| `components/tabs` | Provides the Tabs system with active-tab state, compound components, automatic activation, keyboard navigation, and ARIA relationships. |
| `hooks` | Contains custom React hooks for reusable behavior; currently includes `useModalFocus`. |
| `demos` | Contains practical examples showing how the reusable components can be consumed in different scenarios. |
| `App.jsx` | Composes the demo sections into the main assignment page. |

## Accessibility

The components are designed around keyboard interaction and semantic accessibility patterns, including appropriate ARIA roles, states, relationships, focus management, and visible keyboard focus.

## Week 6 Concepts Used

### Custom Hooks

Custom hooks extract React-specific behavior into reusable functions. `useModalFocus` separates Modal focus and keyboard behavior from the rendering component.

### `useMemo` / `useCallback`

These were intentionally not used because the assignment did not present a demonstrated performance problem that required memoization.

### Composition

Components are built from smaller pieces that consumers can arrange and provide content for, keeping the APIs flexible.

### State Colocation

Each component system owns the state that belongs to it instead of placing unrelated UI state in a single global location.

### Prop Drilling

The project avoids unnecessary prop drilling by using Context where deeply related compound components need shared state or behavior.

### Context

Context allows compound components to access shared state and actions without passing props through intermediate components.

### Provider

Providers define the boundary in which a component's shared Context value is available.

### Compound Components

Modal, Accordion, and Tabs expose related subcomponents that work together as one reusable UI system.

### Container / Presentational

The project separates behavior and coordination from presentation where useful, especially by extracting Modal behavior into a custom hook.

### Render Props

Render Props were intentionally not used because they were not a natural fit for the APIs of these components.

### HOCs

Higher-Order Components were not used because the assignment is built with modern function components, Context, composition, and custom hooks without needing HOC-based enhancement.

## Local Setup

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Demo

[Accessible UI Components Assignment - Week 6](https://arbaz-17.github.io/Accessible-UI-Components-Assignment/)


