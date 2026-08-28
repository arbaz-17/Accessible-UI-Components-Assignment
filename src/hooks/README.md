# Hooks

## Overview

The `hooks` folder contains custom React hooks that extract reusable React-specific behavior from components. Currently, it contains one custom hook used by the Modal component for focus and keyboard management.

## Key Features

- Encapsulates complex Modal behavior
- Keeps DOM and keyboard logic separate from UI rendering
- Uses React effects and refs for focus management
- Reusable within the Modal implementation

## Hook

### `useModalFocus`

Handles the Modal's interaction and focus behavior.

```js
useModalFocus({
  isOpen,
  dialogRef,
  close,
  previousActiveElementRef
}): void
```

It manages:

- Initial focus when the Modal opens
- `Tab` and `Shift + Tab` focus containment
- `Escape` key handling
- Focus restoration when the Modal closes
- Event listener setup and cleanup

## Usage

The hook is used by `ModalContent`:

```jsx
useModalFocus({
  isOpen,
  dialogRef,
  close,
  previousActiveElementRef,
});
```

This keeps `ModalContent` focused mainly on rendering and accessibility semantics while the hook handles DOM-related behavior.

## Notes

A custom hook was not created for every component. Hooks are introduced only when behavior is complex enough to benefit from separation, avoiding unnecessary abstraction.
