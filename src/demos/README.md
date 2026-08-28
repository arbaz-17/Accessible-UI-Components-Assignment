# Demos

## Overview

The `demos` folder contains example implementations that showcase how the reusable Modal, Accordion, and Tabs components can be consumed. These files are for demonstration and testing rather than component logic.

## Key Features

- Separate demos for each component system
- Demonstrates reusable Compound Component APIs
- Shows different Modal use cases
- Shows Accordion single and multiple modes
- Shows Tabs with multiple tab panels
- Keeps `App.jsx` focused on page composition

## Demo Files

### `ModalDemo.jsx`

Showcases two Modal use cases:

- Delete confirmation
- Project details

### `AccordionDemo.jsx`

Showcases both supported Accordion modes:

- `single` — one item open at a time
- `multiple` — multiple items can remain open

### `TabsDemo.jsx`

Showcases a reusable Tabs interface containing:

- Overview
- Tasks
- Team

## Usage

The demos are imported into `App.jsx`:

```jsx
import { ModalDemo } from "./demos/ModalDemo";
import { AccordionDemo } from "./demos/AccordionDemo";
import { TabsDemo } from "./demos/TabsDemo";

function App() {
  return (
    <main>
      <ModalDemo />
      <AccordionDemo />
      <TabsDemo />
    </main>
  );
}
```

The demo folder intentionally contains usage examples, while the actual reusable component implementation remains inside `components/`.
