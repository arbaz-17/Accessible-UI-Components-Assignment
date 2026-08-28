# Accordion

## Overview

Reusable accessible accordion built with Compound Components, Context, and Providers. It supports single or multiple expanded items and keyboard navigation.

## Key Features

- Compound API: `Accordion.Item`, `Accordion.Trigger`, `Accordion.Panel`
- Single and multiple expansion modes
- Context for shared Accordion state
- Item-level Context for trigger/panel coordination
- Keyboard navigation with Arrow Up/Down, Home, and End
- ARIA relationships with `aria-expanded` and `aria-controls`
- Native button interaction with Enter and Space

## Public API

```jsx
<Accordion type="single" defaultValue="react">
  <Accordion.Item value="react">
    <Accordion.Trigger>What is React?</Accordion.Trigger>

    <Accordion.Panel>
      React is a JavaScript library for building user interfaces.
    </Accordion.Panel>
  </Accordion.Item>
</Accordion>
```

### Modes

```jsx
<Accordion type="single" defaultValue="react">
```

Only one item can be open.

```jsx
<Accordion type="multiple" defaultValue={["react", "hooks"]}>
```

Multiple items can be open.

## Important Functions

```js
toggleItem(value): void
isItemOpen(value): boolean
useAccordionContext(): AccordionContextValue
useAccordionItemContext(): AccordionItemContextValue
```

`toggleItem()` opens or closes an item according to the selected mode. `isItemOpen()` determines whether an item is expanded.

## Accessibility Notes

- Accordion triggers use native `<button>` elements.
- `aria-expanded` communicates the expanded/collapsed state.
- `aria-controls` connects each trigger to its panel.
- Panels use `aria-labelledby` to reference their trigger.
- Arrow Up/Down moves between triggers.
- Home moves to the first trigger and End moves to the last.
