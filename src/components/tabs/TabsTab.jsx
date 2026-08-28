import { useTabsContext } from "./useTabsContext";
import { useTabsListContext } from "./useTabsListContext";

export function TabsTab({ value, children }) {
  if (!value) {
    throw new Error("<Tabs.Tab> requires a non-empty value.");
  }

  const { activeValue, selectTab, getTabId, getPanelId } = useTabsContext();
  const { listRef } = useTabsListContext();

  const tabId = getTabId(value);
  const panelId = getPanelId(value);
  const isActive = activeValue === value;

  const handleClick = () => {
    selectTab(value);
  };

  const handleKeyDown = (event) => {
    if (!listRef.current) return;

    const tabs = Array.from(listRef.current.querySelectorAll('[role="tab"]'));
    if (tabs.length === 0) return;

    const currentIndex = tabs.indexOf(event.currentTarget);
    if (currentIndex === -1) return;

    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex === undefined) return;
    event.preventDefault();

    const nextTab = tabs[nextIndex];
    const nextValue = nextTab.dataset.tabValue;

    nextTab.focus();
    selectTab(nextValue);
  };

  return (
    <button
      id={tabId}
      type="button"
      role="tab"
      className="tabs-tab"
      data-tab-value={value}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
}