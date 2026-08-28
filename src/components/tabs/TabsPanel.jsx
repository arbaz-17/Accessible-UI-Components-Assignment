import { useTabsContext } from "./useTabsContext";

export function TabsPanel({ value, children }) {
  if (!value) {
    throw new Error(
      "<Tabs.Panel> requires a non-empty value."
    );
  }

  const {
    activeValue,
    getTabId,
    getPanelId,
  } = useTabsContext();

  const tabId = getTabId(value);
  const panelId = getPanelId(value);

  const isActive = activeValue === value;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!isActive}
    >
      {children}
    </div>
  );
}