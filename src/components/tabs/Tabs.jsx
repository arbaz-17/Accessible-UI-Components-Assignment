import { useId, useState } from "react";

import { TabsProvider } from "./TabsProvider";
import { TabsList } from "./TabsList";
import { TabsTab } from "./TabsTab";
import { TabsPanel } from "./TabsPanel";

export function Tabs({ defaultValue, children }) {
  if (!defaultValue) {
    throw new Error(
      '<Tabs> requires a "defaultValue".'
    );
  }

  const [activeValue, setActiveValue] = useState(defaultValue);

  const rootId = useId();

  const selectTab = (value) => {
    setActiveValue(value);
  };

  const getTabId = (value) =>
    `${rootId}-tab-${value}`;

  const getPanelId = (value) =>
    `${rootId}-panel-${value}`;

  const contextValue = {
    activeValue,
    selectTab,
    getTabId,
    getPanelId,
  };

  return (
    <TabsProvider value={contextValue}>
      <div>{children}</div>
    </TabsProvider>
  );
}

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;