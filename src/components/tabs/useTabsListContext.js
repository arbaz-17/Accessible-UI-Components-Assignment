import { useContext } from "react";
import { TabsListContext } from "./TabsListContext";

export function useTabsListContext() {
  const context = useContext(TabsListContext);

  if (!context) {
    throw new Error(
      "Tabs components must be used inside <Tabs.List />"
    );
  }

  return context;
}