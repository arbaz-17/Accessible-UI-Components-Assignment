# Tabs

## Overview

Reusable accessible tabs built with Compound Components, Context, and a Provider. The component manages the active tab internally and supports automatic activation with keyboard navigation.

## Key Features

- Compound API: `Tabs.List`, `Tabs.Tab`, `Tabs.Panel`
- Uncontrolled active-tab state
- Context for shared tab state and selection
- Automatic tab activation
- Keyboard navigation with Arrow Left/Right, Home, and End
- ARIA relationships between tabs and panels
- Unique IDs generated with `useId`

## Public API

```jsx
<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="overview">
    Overview content.
  </Tabs.Panel>

  <Tabs.Panel value="settings">
    Settings content.
  </Tabs.Panel>
</Tabs>
```

## Important Functions

```js
selectTab(value): void
getTabId(value): string
getPanelId(value): string
useTabsContext(): TabsContextValue
useTabsListContext(): TabsListContextValue
```

`selectTab()` changes the active tab. `getTabId()` and `getPanelId()` generate matching IDs for tab/panel relationships.

## Accessibility Notes

- Uses `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- `aria-selected` communicates the active tab.
- `aria-controls` connects each tab to its panel.
- `aria-labelledby` connects each panel back to its tab.
- Only the active tab has `tabIndex="0"`.
- Arrow Left/Right, Home, and End support keyboard navigation.
