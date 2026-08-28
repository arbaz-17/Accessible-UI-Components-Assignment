# Modal

## Overview

Reusable accessible dialog built with Compound Components, Context, and a Provider. The Modal manages its own open/closed state and shares behavior with its child components.

## Key Features

- Compound API: `Trigger`, `Content`, `Title`, `Description`, `Close`
- Uncontrolled internal state
- Context and Provider
- Escape-to-close
- Backdrop click-to-close
- Initial focus and focus restoration
- Keyboard focus containment
- ARIA dialog semantics

## Public API

```jsx
<Modal>
  <Modal.Trigger>Open Modal</Modal.Trigger>

  <Modal.Content>
    <Modal.Title>Modal Title</Modal.Title>
    <Modal.Description>Description</Modal.Description>
    <Modal.Close>Close</Modal.Close>
  </Modal.Content>
</Modal>
```

## Important Functions

```js
open(): void
close(): void
useModalContext(): ModalContextValue

useModalFocus({
  isOpen,
  dialogRef,
  close,
  previousActiveElementRef
}): void
```

`open()` opens the dialog and stores the previously focused element. `close()` closes it. `useModalContext()` provides shared Modal state and actions. `useModalFocus()` handles Escape, focus movement, focus containment, and restoration.

## Accessibility Notes

- Uses `role="dialog"` and `aria-modal="true"`.
- `aria-labelledby` connects the dialog to `Modal.Title`.
- `aria-describedby` connects the dialog to `Modal.Description`.
- `Tab` and `Shift + Tab` keep focus inside the dialog.
- `Escape` closes the dialog.
- Focus is restored to the element that opened the Modal when possible.
- Native `<button>` elements provide standard keyboard interaction.
